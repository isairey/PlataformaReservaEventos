package com.swp.cms.reqDto;

import com.swp.entity.enums.Roles;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserRequest {
    private Integer id;
    @NotNull
    String display_name;
    @NotNull
    String email;
    @NotNull
    String password;
    @NotNull
    String phone;
    Roles role_id;
    LocalDateTime createdDate;
}
