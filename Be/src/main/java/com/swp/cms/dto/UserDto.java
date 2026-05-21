package com.swp.cms.dto;

import com.swp.entity.enums.Roles;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class UserDto {
    private Integer userId;
    private String display_name;
    private String password;

    @NotBlank(message = "Email address cannot be empty")
    @Email(message = "Invalid email address")
    private String email;

    private String phone;
    private LocalDateTime created_date;
    private Roles role_id;
}
