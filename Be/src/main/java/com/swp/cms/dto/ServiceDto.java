package com.swp.cms.dto;

import com.swp.entity.Package;
import com.swp.entity.enums.ServiceType;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ServiceDto {
    private Integer id;

    private Package packageId;

    private ServiceType serviceType;

    @NotNull(message = "Amount cannot be empty")
    @PositiveOrZero(message = "Amount must be 0 or more")
    private Integer serviceAmount;

    @NotNull(message = "Price cannot be empty")
    @PositiveOrZero(message = "Price must be 0 or more")
    private Double price;
}
