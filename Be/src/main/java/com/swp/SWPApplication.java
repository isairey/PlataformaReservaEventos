package com.swp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
public class SWPApplication {

	public static void main(String[] args) {
		SpringApplication.run(SWPApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner commandLineRunner(
//			AuthService service
//	) {
//		return args -> {
//			var admin = RegisterRequest.builder()
//					.displayName("Admin")
//					.email("admin@gmail.com")
//					.password("admin12345")
//					.phone("0835985230")
//					.build();
//			System.out.println("Admin token: " + service.register(admin).getToken());
//
//			var manager = RegisterRequest.builder()
//					.displayName("Manager")
//					.email("manager@gmail.com")
//					.password("manager12345")
//					.phone("0835985230")
//					.build();
//			System.out.println("Manager token: " + service.register(manager).getToken());
//
//		};
//	}
}
