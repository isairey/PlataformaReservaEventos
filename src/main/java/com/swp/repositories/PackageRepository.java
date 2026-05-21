package com.swp.repositories;

import com.swp.entity.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface PackageRepository extends JpaRepository<Package, Integer>, JpaSpecificationExecutor<Package> {
    Optional<Package> findByPackageName(String packageName);
}
