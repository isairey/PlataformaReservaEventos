package com.swp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.util.Objects;
import java.util.UUID;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingId;

    @ManyToOne
    @JoinColumn(name = "packageId")
    private Package packageId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @CreationTimestamp
    private LocalDateTime bookingDate;

    @Column(unique = true, nullable = false)
    private String confirmNumber;

    @Column(name = "paymentStatus")
    private String paymentStatus;

    @Column(name = "totalCost")
    private Double totalCost;

    @OneToMany(mappedBy = "booking")
    private List<BookedService> bookingServices = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.confirmNumber = UUID.randomUUID().toString().substring(0, 8);
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + bookingId +
                ", confirmationNumber='" + confirmNumber + '\'' +
                ", bookingDate=" + bookingDate +
                ", package=" + packageId +
                ", payment=" + paymentStatus +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(packageId, booking.bookingId) && Objects.equals(confirmNumber, booking.confirmNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(bookingId, confirmNumber);
    }
}
