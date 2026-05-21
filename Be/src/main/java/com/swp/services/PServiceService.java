package com.swp.services;

import com.swp.cms.dto.ServiceDto;
import com.swp.entity.PService;
import com.swp.entity.Package;
import com.swp.repositories.ServiceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PServiceService {
    private final ServiceRepository serviceRepository;

    public List<ServiceDto> getAllServices() {
        List<PService> services = serviceRepository.findAll();
        return mapServicesToServiceDtos(services);
    }
    public PService saveService(ServiceDto serviceDTO, Package aPackage) {
        log.info("Attempting to save a new Service: {}", serviceDTO);
        PService service = mapServiceDtoToService(serviceDTO, aPackage);
        service = serviceRepository.save(service);
        log.info("Successfully saved Service with ID: {}", service.getServiceId());
        return service;
    }

    public List<PService> saveServices(List<ServiceDto> ServiceDTOs, Package aPackage) {
        log.info("Attempting to save Services: {}", ServiceDTOs);
        List<PService> Services = ServiceDTOs.stream()
                .map(ServiceDTO -> saveService(ServiceDTO, aPackage)) // save each Service
                .collect(Collectors.toList());
        log.info("Successfully saved Services: {}", Services);
        return Services;
    }

    public List<PService> getServicesByIds(List<Integer> serviceIds) {
        return serviceRepository.findAllById(serviceIds);
    }
    public Optional<PService> getServicesById(Integer serviceId) {
        return serviceRepository.findById(serviceId);
    }

    public void deletePackage(Integer id) {

    }

    public PService mapServiceDtoToService(ServiceDto serviceDTO, Package aPackage) {
        log.debug("Mapping ServiceDTO to Service: {}", serviceDTO);
        PService service = PService.builder()
                .packageId(aPackage)
                .serviceType(serviceDTO.getServiceType())
                .serviceAmount(serviceDTO.getServiceAmount())
                .price(serviceDTO.getPrice())
                .build();
        log.debug("Mapped Service: {}", service);
        return service;

    }

    public ServiceDto mapServiceToServiceDto(PService service) {
        return ServiceDto.builder()
                .id(service.getServiceId())
                .packageId(service.getPackageId())
                .serviceType(service.getServiceType())
                .serviceAmount(service.getServiceAmount())
                .price(service.getPrice())
                .build();
    }

    List<ServiceDto> mapServicesToServiceDtos(List<PService> services){
        return services.stream()
                .map(this::mapServiceToServiceDto)
                .collect(Collectors.toList());
    }
}
