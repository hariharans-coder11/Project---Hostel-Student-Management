package com.hostel.management.repository;

import com.hostel.management.entity.Outpass;
import com.hostel.management.entity.OutpassStatus;
import com.hostel.management.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface OutpassRepository extends JpaRepository<Outpass, UUID> {
    List<Outpass> findByUserOrderByCreatedAtDesc(User user);
    Optional<Outpass> findByQrCodeString(String qrCodeString);
    List<Outpass> findByStatus(OutpassStatus status);
}
