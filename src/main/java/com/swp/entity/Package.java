package com.swp.entity;

import com.swp.entity.enums.Location;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

    private Double price;

    @Column(nullable = false)
    private LocalDateTime checkinTime;

    @Column(nullable = false)
    private LocalDateTime checkoutTime;

    @Column(nullable = false)
    private Integer capacity;

    @Enumerated(EnumType.STRING)
    private Location venue;
    public void setVenueWithPrice(Location venue) {
        this.venue = venue;
        this.price = venue.getPrice(); // Set the price based on the chosen location
    }

    @OneToMany(mappedBy = "packageId", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<PService> services = new ArrayList<>();

    @OneToMany(mappedBy = "packageId")
    private List<Booking> bookings = new ArrayList<>();

    @Override
    public String toString() {
        return "Package{" +
                "id=" + id +
                ", name='" + packageName + '\'' +
                ", address=" + venue +
                ", rooms=" + services +
                '}';
    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Package packages = (Package) o;
//        return Objects.equals(packageId, packages.packageId) && Objects.equals(packageName, packages.packageName) && Objects.equals(host, packages.HOST);
//    }

    @Override
    public int hashCode() {
        return Objects.hash(id, packageName);
    }
}
