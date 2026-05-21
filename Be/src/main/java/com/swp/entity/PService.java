package com.swp.entity;

import com.swp.entity.enums.ServiceType;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer serviceId;

    @Column(name = "serviceName")
    private String serviceName;

    @Column(name = "description")
    private String description;

    @Column(nullable = false)
    private Double price;

    @Enumerated(EnumType.STRING)
    private ServiceType serviceType;

    private Integer serviceAmount;

    @Column(nullable = true)
    private String serviceImage;

    @ManyToOne
    @JoinColumn(nullable = true)
    private Package packageId;

    @OneToMany(mappedBy = "service")
    private List<BookedService> bookingServices = new ArrayList<>();

    @Override
    public String toString() {
        return "Service{" +
                "id=" + serviceId +
                ", package=" + packageId +
                ", type=" + serviceType +
                ", price=" + price +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PService service = (PService) o;
        return Objects.equals(serviceId, service.serviceId) && Objects.equals(packageId, service.packageId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(serviceId, packageId);
    }
}
