package com.swp.cms.controller;

import com.swp.cms.reqDto.ResetPasswordRequest;
import com.swp.entity.User;
import com.swp.services.BookingService;
import com.swp.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@Controller
@RequestMapping("/customer")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    private final BookingService bookingService;

    private Integer getCurrentCustomerId() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userService.findUserByUsername(username).get().getUsId();
    }

    @GetMapping("/getUserById/{userId}")
    public User getUserById(@PathVariable Integer userId){
        return userService.getById(userId);
    }

    @PutMapping("/updateUser/{userId}")
    public User updateUser(@PathVariable Integer userId, @RequestBody User updateUser){
        return userService.updateUser(userId,updateUser);
    }
    @DeleteMapping("/deleteUser/{userId}")
    public void deleteUser(@PathVariable Integer userId){

        userService.deleteUser(userId);
    }
}


