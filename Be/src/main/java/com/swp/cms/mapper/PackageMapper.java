package com.swp.cms.mapper;

import com.swp.cms.dto.PackageDto;
import com.swp.entity.Package;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PackageMapper {
    @IterableMapping(qualifiedByName = "fromEntityToPackageDto")
    @Named(value = "fromEntityToPackageDtoList")
    public List<PackageDto> fromEntityToPackageDtoList(List<Package> input);

    @Named(value = "fromEntityToPackageDto")
    public PackageDto fromEntityToPackageDto(Package input);
}
