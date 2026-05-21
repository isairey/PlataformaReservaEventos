package com.swp.repositories;

import com.swp.entity.TimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface TimeSlotRepository extends JpaRepository<TimeSlot, Integer> {

    List<TimeSlot> findByPackagesIdAndStartGreaterThanEqualAndEndLessThanEqual(Integer packageId, Date startTime, Date endTime);
}
