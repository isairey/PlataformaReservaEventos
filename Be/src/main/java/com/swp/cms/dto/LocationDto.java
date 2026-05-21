package com.swp.cms.dto;

import com.swp.entity.enums.Location;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LocationDto {
    private String name;
    private Double price;

    // Constructor, getters, and setters

    public static LocationDto fromLocation(Location location) {
        return new LocationDto(location.name(), location.getPrice());
    }
}


