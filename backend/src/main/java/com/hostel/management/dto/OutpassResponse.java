package com.hostel.management.dto;

import com.hostel.management.entity.OutpassStatus;
import java.time.LocalDateTime;
import java.util.UUID;

public class OutpassResponse {
    private UUID id;
    private String studentName;
    private String roomNumber;
    private String destination;
    private String reason;
    private LocalDateTime fromDate;
    private LocalDateTime toDate;
    private OutpassStatus status;
    private String qrCodeString;
    private LocalDateTime createdAt;

    public OutpassResponse() {}

    public OutpassResponse(UUID id, String studentName, String roomNumber, String destination, String reason, LocalDateTime fromDate, LocalDateTime toDate, OutpassStatus status, String qrCodeString, LocalDateTime createdAt) {
        this.id = id;
        this.studentName = studentName;
        this.roomNumber = roomNumber;
        this.destination = destination;
        this.reason = reason;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.status = status;
        this.qrCodeString = qrCodeString;
        this.createdAt = createdAt;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getStudentName() { return studentName; }
    public void setStudentName(String studentName) { this.studentName = studentName; }

    public String getRoomNumber() { return roomNumber; }
    public void setRoomNumber(String roomNumber) { this.roomNumber = roomNumber; }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public String getReason() { return reason; }
    public void setReason(String reason) { this.reason = reason; }

    public LocalDateTime getFromDate() { return fromDate; }
    public void setFromDate(LocalDateTime fromDate) { this.fromDate = fromDate; }

    public LocalDateTime getToDate() { return toDate; }
    public void setToDate(LocalDateTime toDate) { this.toDate = toDate; }

    public OutpassStatus getStatus() { return status; }
    public void setStatus(OutpassStatus status) { this.status = status; }

    public String getQrCodeString() { return qrCodeString; }
    public void setQrCodeString(String qrCodeString) { this.qrCodeString = qrCodeString; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
