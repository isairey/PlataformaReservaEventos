package com.swp.entity;

import com.swp.entity.enums.EBookingStatus;
import com.swp.entity.enums.ESlotStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TimeSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "start_time")
    private Date start;
    @Column(name = "end_time")
    private Date end;

    @Enumerated(EnumType.STRING)
    @Column(name = "slot_status")
    private ESlotStatus status;

    @ManyToOne
    @JoinColumn(name = "package_id")
    private Package packages;

}
