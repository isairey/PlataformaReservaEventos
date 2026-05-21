package com.swp.services;

import com.swp.cms.dto.UserDto;
import com.swp.cms.reqDto.ResetPasswordRequest;
import com.swp.entity.User;
import com.swp.exception.EntityNotFoundException;
import com.swp.repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private Integer userId;
    @Autowired
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostConstruct
    public void initialize() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            User userDetails = (User) authentication.getPrincipal();
            userId = userDetails.getUsId();
        }
    }

    public Optional<User> findUserByUsername(String username) {
        return userRepository.findByEmail(username);
    }

    public User getById() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User userDetails = (User) authentication.getPrincipal();
        Integer userId = userDetails.getUsId();
        return userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException(User.class, "id", userId.toString()));
    }

    public User getById(Integer id){
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(User.class, "id", id.toString()) );
    }

    public List<UserDto> getAllUsers() {
        List<User> userList = userRepository.findAll();

        List<UserDto> userDTOList = new ArrayList<>();
        for (User user : userList) {
            UserDto userDTO = mapUserToUserDto(user);
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }

    private UserDto mapUserToUserDto(User user) {
        return UserDto.builder()
                .userId(user.getUsId())
                .email(user.getUsername())
                .display_name(user.getDisplay_name())
                .phone(user.getPhone())
                .role_id(user.getRole_id())
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

    public void updateLoggedInUser(UserDto userDTO) {
        String loggedInUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        Optional<User> loggedInUser = userRepository.findByEmail(loggedInUsername);

        //setFormattedDataToUser(loggedInUser, userDTO);
        //userRepository.save(loggedInUser);
        log.info("Successfully updated logged in user with ID: {}", loggedInUser.get().getUsId());

        // Create new authentication token
        updateAuthentication(userDTO);
    }

    private void updateAuthentication(UserDto userDTO) {
        Optional<User> user = userRepository.findByEmail(userDTO.getEmail());

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.get().getUsername()));

        UserDetails newUserDetails = new org.springframework.security.core.userdetails.User(
                user.get().getUsername(),
                user.get().getPassword(),
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

}
