package com.hostel.management.config;

import com.hostel.management.entity.Role;
import com.hostel.management.entity.User;
import com.hostel.management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        String email = "richard@hostel.com";
        if (!userRepository.existsByEmail(email)) {
            User user = new User(
                    "Richard",
                    email,
                    passwordEncoder.encode("password123"),
                    Role.STUDENT,
                    "B-402"
            );
            userRepository.save(user);
            System.out.println("Created seeder user: richard@hostel.com");
        }
    }
}
