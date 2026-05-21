package com.swp.repositories;

import com.swp.entity.PackageServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PServiceRepository extends JpaRepository<PackageServiceEntity, Integer> {
}
