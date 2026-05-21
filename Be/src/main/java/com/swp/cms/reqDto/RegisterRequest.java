package com.swp.cms.reqDto;

import com.swp.entity.Role;
import com.swp.entity.enums.Roles;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "Email address cannot be empty")
    @Email(message = "Invalid email address")
    private String email;

    @NotBlank(message = "Name cannot be empty")
    @Pattern(regexp = "^(?!\\s*$)[A-Za-z ]+$", message = "Name must only contain letters")
    private String displayName;

    @NotBlank(message = "Password cannot be empty")
    private String password;
    @NotBlank(message = "Phone cannot be empty")
    private String phone;
    private Roles role;

}
