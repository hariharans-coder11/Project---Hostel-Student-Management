package com.hostel.management.service;

import com.hostel.management.dto.OutpassRequest;
import com.hostel.management.dto.OutpassResponse;
import com.hostel.management.entity.Outpass;
import com.hostel.management.entity.OutpassStatus;
import com.hostel.management.entity.User;
import com.hostel.management.exception.ResourceNotFoundException;
import com.hostel.management.repository.OutpassRepository;
import com.hostel.management.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OutpassService {

    @Autowired
    private OutpassRepository outpassRepository;

    @Autowired
    private UserRepository userRepository;

    public OutpassResponse createOutpass(OutpassRequest request, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Outpass outpass = new Outpass(
                user,
                request.getDestination(),
                request.getReason(),
                request.getFromDate(),
                request.getToDate(),
                OutpassStatus.PENDING
        );

        Outpass saved = outpassRepository.save(outpass);
        return mapToResponse(saved);
    }

    public List<OutpassResponse> getOutpassesByUser(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        return outpassRepository.findByUserOrderByCreatedAtDesc(user)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public OutpassResponse getOutpassById(UUID id) {
        Outpass outpass = outpassRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Outpass not found"));
        return mapToResponse(outpass);
    }

    public OutpassResponse updateOutpassStatus(UUID id, OutpassStatus status) {
        Outpass outpass = outpassRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Outpass not found"));
        
        outpass.setStatus(status);
        Outpass saved = outpassRepository.save(outpass);
        return mapToResponse(saved);
    }

    public OutpassResponse verifyOutpass(String qrCodeString) {
        Outpass outpass = outpassRepository.findByQrCodeString(qrCodeString)
                .orElseThrow(() -> new ResourceNotFoundException("Outpass not found for QR code"));
        
        if (outpass.getStatus() == OutpassStatus.APPROVED) {
            outpass.setStatus(OutpassStatus.USED);
            outpassRepository.save(outpass);
        }
        
        return mapToResponse(outpass);
    }

    private OutpassResponse mapToResponse(Outpass outpass) {
        return new OutpassResponse(
                outpass.getId(),
                outpass.getUser().getName(),
                outpass.getUser().getRoomNumber(),
                outpass.getDestination(),
                outpass.getReason(),
                outpass.getFromDate(),
                outpass.getToDate(),
                outpass.getStatus(),
                outpass.getQrCodeString(),
                outpass.getCreatedAt()
        );
    }
}
