package com.swp.entity.enums;

import com.swp.token.Permission;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.swp.token.Permission.*;

@RequiredArgsConstructor
public enum Roles {
    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    ADMIN_CREATE,
                    HOST_READ,
                    HOST_UPDATE,
                    HOST_DELETE,
                    HOST_CREATE
            )
    ),
    CUSTOMER(Collections.emptySet()),
    HOST(
            Set.of(
                    HOST_READ,
                    HOST_UPDATE,
                    HOST_DELETE,
                    HOST_CREATE
            )
    );

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }

}
