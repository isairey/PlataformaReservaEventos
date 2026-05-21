package com.swp.cms.mapper;

import com.swp.cms.dto.BookingDto;
import com.swp.cms.dto.ReservationDto;
import com.swp.entity.Booking;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BookingMapper {
    @IterableMapping(elementTargetType = ReservationDto.class, qualifiedByName = "fromEntityToReservationDto")
    @Named(value = "fromEntityToReservationDtoList")
    public List<ReservationDto> fromEntityToReservationDtoList(List<Booking> input);

    @Named(value = "fromEntityToReservationDto")
    @Mapping(target = "userId", source = "customer.usId")
    @Mapping(target = "packageId", source = "packages.id")
    public ReservationDto fromEntityToReservationDto(Booking input);

    @Named(value = "fromEntityToBookingDto")
    public BookingDto fromEntityToBookingDto(Booking input);
}
