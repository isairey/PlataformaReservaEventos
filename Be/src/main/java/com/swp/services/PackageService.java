package com.swp.services;

import com.swp.cms.dto.PackageCreateDto;
import com.swp.cms.dto.PackageDto;
import com.swp.cms.dto.ServiceDto;
import com.swp.entity.PService;
import com.swp.entity.Package;
import com.swp.entity.enums.Location;
import com.swp.exception.PackageAlreadyExistException;
import com.swp.repositories.PackageRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PackageService {
    private final PackageRepository packageRepository;

    private final PServiceService serviceServiceService;
    private final UserService userService;

    @Transactional
    public Package createPackage(PackageCreateDto createDto) {
        Optional<Package> existingPackage = packageRepository.findByPackageName(createDto.getName());
        if (existingPackage.isPresent()) {
            throw new PackageAlreadyExistException("This package name is already registered!");
        }

        Package aPackage = mapPackageDtoToPackage(createDto);
        aPackage.setVenueWithPrice(createDto.getVenue());
        aPackage.setCapacity(createDto.getCapacity());
        aPackage.setPackageName(createDto.getName());
        //aPackage.setPrice(createDto.getVenue().getPrice());
        aPackage.setDescription(createDto.getDescription());
        aPackage.setCheckinTime(createDto.getCheckinTime());
        aPackage.setCheckoutTime(createDto.getCheckoutTime());

        //aPackage = packageRepository.save(aPackage);
        List<Integer> serviceIds = createDto.getServiceDtos();

        if (serviceIds != null && !serviceIds.isEmpty()){
            List<PService> savedServices = serviceServiceService.getServicesByIds(serviceIds);
            aPackage.setServices(savedServices);
        }
        Package savedPackage = packageRepository.save(aPackage);
        log.info("Successfully saved new package with ID: {}", aPackage.getId());
        return savedPackage;
    }

    private Package mapPackageDtoToPackage(PackageCreateDto dto) {
        return Package.builder()
                .packageName(formatText(dto.getName()))
                .build();
    }
    public PackageDto mapPackageToPackageDto(Package packages) {
        List<ServiceDto> serviceDtos = packages.getServices().stream()
                .map(serviceServiceService::mapServiceToServiceDto)
                .collect(Collectors.toList());  // collect results to a list

        return PackageDto.builder()
                .id(packages.getId())
                .name(packages.getPackageName())
                .venue(Location.valueOf(String.valueOf(packages.getVenue())))
                .serviceDtos(serviceDtos)
                .build();
    }

    private String formatText(String text) {
        return StringUtils.capitalize(text.trim());
    }
}

