package com.swp.cms.controller;

import com.swp.cms.dto.UserDto;
import com.swp.cms.reqDto.ResetPasswordRequest;
import com.swp.entity.User;
import com.swp.exception.EmailAlreadyExistException;
import com.swp.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Controller
@RequestMapping("/profile")
@RequiredArgsConstructor
@Slf4j
public class ProfileController {
    private final UserService userService;
    private ModelMapper modelMapper;
    private PasswordEncoder passwordEncoder;

    @PatchMapping("/resetPassword")
    public ResponseEntity<?> changePassword(
            @RequestBody ResetPasswordRequest request,
            Principal connectedUser
    ) {
        userService.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public UserDto getUserById(){
        User us = userService.getById();
        UserDto dto = modelMapper.map(us, UserDto.class);
        return dto;
    }

    // Customer actions
    @GetMapping("/customer/account")
    public String showCustomerAccount(Model model){
        log.debug("Displaying customer account");
        addLoggedInUserDataToModel(model);
        return "";
    }

    @PostMapping("/customer/account/edit")
    public String editCustomerAccount(@Valid @ModelAttribute("user") UserDto userDTO, BindingResult result) {
        log.info("Attempting to edit customer account details for ID: {}", userDTO.getUserId());
        if (result.hasErrors()) {
            log.warn("Validation errors occurred while editing customer account");
            return "";
        }
        try {
            //userService.updateUser(userDTO);
            log.info("Successfully edited customer account");
        } catch (EmailAlreadyExistException e) {
            log.error("Email already exists error", e);
            result.rejectValue("email", "user.exists", "Email is already registered!");
            return "";
        }
        return "";
    }

    // Party Host actions
    @GetMapping("/host/account")
    public String showHostAccount(Model model){
        log.debug("Displaying host account");
        addLoggedInUserDataToModel(model);
        return "hotelhost/account";
    }

    @PostMapping("/host/account/edit")
    public String editHostAccount(@Valid @ModelAttribute("user") UserDto userDTO, BindingResult result) {
        log.info("Attempting to edit host account details for ID: {}", userDTO.getUserId());
        if (result.hasErrors()) {
            log.warn("Validation errors occurred while editing host account");
            return "";
        }
        try {
            userService.updateLoggedInUser(userDTO);
            log.info("Successfully edited hotel host account");
        } catch (EmailAlreadyExistException e) {
            log.error("Username already exists error", e);
            result.rejectValue("username", "user.exists", "Username is already registered!");
            return "";
        }
        return "";
    }

    private void addLoggedInUserDataToModel(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        //UserDto userDTO = userService.findUserDTOByUsername(username);
        //model.addAttribute("user", userDTO);
    }
}
