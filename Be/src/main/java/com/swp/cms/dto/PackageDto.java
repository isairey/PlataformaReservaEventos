package com.swp.cms.dto;

import com.swp.entity.enums.Location;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class PackageDto {
    private Integer id;

    @NotBlank(message = "Package name cannot be empty")
    @Pattern(regexp = "^(?!\\s*$)[A-Za-z0-9 ]+$", message = "Package name must only contain letters and numbers")
    private String name;

    @Valid
    private List<ServiceDto> serviceDtos = new ArrayList<>();

    @NotBlank(message = "Package venue cannot be empty")
    private Location venue;

    private String description;

    private LocalDateTime checkinTime;

    private LocalDateTime checkoutTime;

    private Integer capacity;
}
