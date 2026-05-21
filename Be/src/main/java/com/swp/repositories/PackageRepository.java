package com.swp.repositories;

import com.swp.entity.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer> {
    Optional<Package> findByPackageName(String packageName);
    @Query("SELECT p FROM Package p WHERE p.userId.usId = :userId")
    List<Package> findByUserIdWithServices(@Param("userId") Integer userId);

    Optional<Package> findByIdAndUserId_UsId(Integer id, Integer userId);

    @Query("SELECT DISTINCT p FROM Package p LEFT JOIN FETCH p.pServices ps LEFT JOIN FETCH ps.service")
    List<Package> findAllPackagesWithServices();


}
