package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.entity.OutpassStatus;
import com.hostel.management.repository.OutpassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private OutpassRepository outpassRepository;

    @GetMapping("/stats")
    public ResponseEntity<ApiResponse> getStats() {
        long total = outpassRepository.count();
        long pending = outpassRepository.findByStatus(OutpassStatus.PENDING).size();
        long approved = outpassRepository.findByStatus(OutpassStatus.APPROVED).size();
        long rejected = outpassRepository.findByStatus(OutpassStatus.REJECTED).size();
        
        Map<String, Long> stats = new HashMap<>();
        stats.put("totalOutpasses", total);
        stats.put("pending", pending);
        stats.put("approved", approved);
        stats.put("rejected", rejected);

        return ResponseEntity.ok(new ApiResponse(true, "Dashboard stats fetched", stats));
    }
}
