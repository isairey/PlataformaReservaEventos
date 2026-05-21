package com.swp.entity.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Location {
    District1(5000000.0), District10(4000000.0), ThuDuc(3500000.0);

    private final Double price;
}
