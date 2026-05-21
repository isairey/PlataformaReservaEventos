package com.swp.services;

import com.swp.cms.dto.UserDto;
import com.swp.cms.reqDto.ResetPasswordRequest;
import com.swp.entity.User;
import com.swp.exception.EmailAlreadyExistException;
import com.swp.exception.EntityNotFoundException;
import com.swp.repositories.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public User findUserByUsername(String username) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User userDetails = (User) authentication.getPrincipal();

        User us = userRepository.findByEmail(userDetails.getUsername());
        return us;
    }

    public UserDto getById() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User userDetails = (User) authentication.getPrincipal();
        Integer userId = userDetails.getUsId();
        User us = userRepository.findByUsId(userId);
        UserDto dto = mapUserToUserDto(us);
        return dto;
    }

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User userDetails = (User) authentication.getPrincipal();
        Integer userId = userDetails.getUsId();
        User us = userRepository.findByUsId(userId);
        return us;
    }

    public User getById(Integer id){
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(User.class, "id", id.toString()) );
    }

    public List<UserDto> getAllUsers() {
        List<User> userList = userRepository.findAll();

        return userList.stream()
                .map(this::mapUserToUserDto)
                .collect(Collectors.toList());
    }

    private UserDto mapUserToUserDto(User user) {
        return UserDto.builder()
                .userId(user.getUsId())
                .email(user.getEmail())
                .display_name(user.getDisplay_name())
                .phone(user.getPhone())
                .role_id(user.getRole().getRoleType())
                .build();
    }

    public void changePassword(ResetPasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        userRepository.save(user);
    }

    @Transactional
    public void updateUser(UserDto userDTO) {
        log.info("Attempting to update user with ID: {}", userDTO.getUserId());

        User user = userRepository.findById(userDTO.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (usernameExistsAndNotSameUser(userDTO.getEmail(), user.getUsId())) {
            throw new EmailAlreadyExistException("This email is already registered!");
        }

        setFormattedDataToUser(user, userDTO);
        userRepository.save(user);
        log.info("Successfully updated existing user with ID: {}", userDTO.getUserId());
    }

    @Transactional
    public void updateLoggedInUser(UserDto userDTO) {
        String loggedInUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        User loggedInUser = userRepository.findByEmail(loggedInUsername);

        setFormattedDataToUser(loggedInUser, userDTO);
        userRepository.save(loggedInUser);
        log.info("Successfully updated logged in user with ID: {}", loggedInUser.getUsId());

        // Create new authentication token
        updateAuthentication(userDTO);
    }

    private void updateAuthentication(UserDto userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail());

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getEmail()));

        UserDetails newUserDetails = new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                authorities
        );

        UsernamePasswordAuthenticationToken newAuthentication = new UsernamePasswordAuthenticationToken(
                newUserDetails,
                null,
                newUserDetails.getAuthorities()
        );
        SecurityContextHolder.getContext().setAuthentication(newAuthentication);
    }

    public User updateUser(Integer userId, User updateUser) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if(optionalUser.isPresent()){
            User userExist = optionalUser.get();
            userExist.setDisplay_name(updateUser.getDisplay_name());
            userExist.setPhone(updateUser.getPhone());
            userExist.setEmail(updateUser.getEmail());
            return userRepository.save(userExist);
        }
        return null;
    }


    public void deleteUser(Integer userId) {
        userRepository.deleteById(userId);
    }

    private boolean usernameExistsAndNotSameUser(String username, Integer userId) {
        Optional<User> existingUserWithSameUsername = Optional.ofNullable(userRepository.findByEmail(username));
        return existingUserWithSameUsername.isPresent() && !existingUserWithSameUsername.get().getUsId().equals(userId);
    }

    private String formatText(String text) {
        return StringUtils.capitalize(text.trim());
    }

    private void setFormattedDataToUser(User user, UserDto userDTO) {
        user.setEmail(userDTO.getEmail());
        user.setDisplay_name(formatText(userDTO.getDisplay_name()));
        user.setPhone(formatText(userDTO.getPhone()));
    }

}
