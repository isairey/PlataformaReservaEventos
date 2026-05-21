package com.swp.cms.dto;

import com.swp.entity.Booking;
import com.swp.entity.PService;
import com.swp.entity.enums.ServiceType;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookedServiceDto {
    //private Integer id;
    private Integer bookingId;
    private List<Integer> service;
}
