package com.swp.cms.reqDto;

import lombok.Data;

@Data
public class BookingUpdateDto {
    private Integer userId;
    private Integer packageId;
    private String status;
}
