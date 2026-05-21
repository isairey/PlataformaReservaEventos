package com.swp.cms.resDto;

import lombok.Data;

@Data
public class GetAvailablePackageResDto {
    private Integer id;
    private int capacity;
    //private String type;
    private Boolean isBooked = false;
}
