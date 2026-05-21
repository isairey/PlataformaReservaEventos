package com.swp.cms.dto;

import com.swp.entity.enums.EBookingStatus;
import lombok.Data;

import java.util.Date;

@Data
public class ReservationDto {
    private Integer id;
    private Integer userId;
    private Integer packageId;
    private Date bookingDate;
    private Date startTime;
    private Date endTime;
    private int partySize;
    private EBookingStatus status;
}
