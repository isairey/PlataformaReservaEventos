package com.swp.repositories;

import com.swp.entity.PService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<PService, Integer>, JpaSpecificationExecutor<PService> {
}
