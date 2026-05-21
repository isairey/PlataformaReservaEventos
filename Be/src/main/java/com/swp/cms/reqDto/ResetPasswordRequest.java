package com.swp.cms.reqDto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ResetPasswordRequest {
    private String currentPassword;
    private String newPassword;
    private String confirmationPassword;
}
