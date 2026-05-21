package com.swp.cms.controller;

import com.swp.cms.dto.PackageCreateDto;
import com.swp.entity.Package;
import com.swp.exception.PackageAlreadyExistException;
import com.swp.services.BookingService;
import com.swp.services.PackageService;
import com.swp.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/host")
@RequiredArgsConstructor
@Slf4j
public class HostController {

    private final PackageService packageService;
    private final UserService userService;
    private final BookingService bookingService;

    @PostMapping("/package/create")
    public ResponseEntity<Package> createPackage(@Valid @RequestBody PackageCreateDto dto, BindingResult result) {
        if (result.hasErrors()) {
            log.warn("Package setup failed due to validation errors: {}", result.getAllErrors());
            return ResponseEntity.badRequest().body(null);
        }

        try {
            Package createdPackage = packageService.createPackage(dto);
            return ResponseEntity.ok(createdPackage);
        } catch (PackageAlreadyExistException e) {
            result.rejectValue("name", "package.exists", e.getMessage());
            log.warn("Package creation failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
}
