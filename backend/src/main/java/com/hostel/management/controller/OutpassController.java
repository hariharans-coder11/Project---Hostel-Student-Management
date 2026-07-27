package com.hostel.management.controller;

import com.hostel.management.dto.ApiResponse;
import com.hostel.management.dto.OutpassRequest;
import com.hostel.management.dto.OutpassResponse;
import com.hostel.management.entity.OutpassStatus;
import com.hostel.management.service.OutpassService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/outpass")
public class OutpassController {

    @Autowired
    private OutpassService outpassService;

    @PostMapping("/")
    public ResponseEntity<ApiResponse> createOutpass(@Valid @RequestBody OutpassRequest request, Authentication authentication) {
        String email = authentication.getName();
        OutpassResponse response = outpassService.createOutpass(request, email);
        return ResponseEntity.ok(new ApiResponse(true, "Outpass created successfully", response));
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse> getMyOutpasses(Authentication authentication) {
        String email = authentication.getName();
        List<OutpassResponse> outpasses = outpassService.getOutpassesByUser(email);
        return ResponseEntity.ok(new ApiResponse(true, "Outpasses fetched successfully", outpasses));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getOutpassById(@PathVariable UUID id) {
        OutpassResponse response = outpassService.getOutpassById(id);
        return ResponseEntity.ok(new ApiResponse(true, "Outpass fetched successfully", response));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<ApiResponse> updateOutpassStatus(@PathVariable UUID id, @RequestParam OutpassStatus status) {
        OutpassResponse response = outpassService.updateOutpassStatus(id, status);
        return ResponseEntity.ok(new ApiResponse(true, "Outpass status updated successfully", response));
    }

    @GetMapping("/verify/{qrCodeString}")
    public ResponseEntity<ApiResponse> verifyOutpass(@PathVariable String qrCodeString) {
        OutpassResponse response = outpassService.verifyOutpass(qrCodeString);
        return ResponseEntity.ok(new ApiResponse(true, "Outpass verified", response));
    }
}
