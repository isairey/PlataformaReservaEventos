package com.swp.entity;

import com.swp.entity.enums.Location;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, nullable = false)
    private String packageName;

    @Column(nullable = false)
    private String description;

    @Getter
    private Double price;

    @Column(nullable = false)
    private int capacity;

    @Enumerated(EnumType.STRING)
    private Location venue;
    public void setVenueWithPrice(Location venue) {
        this.venue = venue;
        this.price = venue.getPrice();
    }

    @OneToMany(mappedBy = "packages", cascade = CascadeType.ALL)
    private List<PackageServiceEntity> pServices = new ArrayList<>();

    @OneToMany(mappedBy = "packages")
    private List<Booking> bookings = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "hostId",nullable = false)
    private User userId;

    @OneToMany(mappedBy = "packages")
    private List<TimeSlot> timeSlots = new ArrayList<>();
}
