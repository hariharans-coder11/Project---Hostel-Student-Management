package com.hostel.management.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class OutpassRequest {
    @NotBlank
    private String destination;

    private String reason;

    @NotNull
    private LocalDateTime fromDate;

    @NotNull
    private LocalDateTime toDate;

    public OutpassRequest() {}

    public OutpassRequest(String destination, String reason, LocalDateTime fromDate, LocalDateTime toDate) {
        this.destination = destination;
        this.reason = reason;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public String getReason() { return reason; }
    public void setReason(String reason) { this.reason = reason; }

    public LocalDateTime getFromDate() { return fromDate; }
    public void setFromDate(LocalDateTime fromDate) { this.fromDate = fromDate; }

    public LocalDateTime getToDate() { return toDate; }
    public void setToDate(LocalDateTime toDate) { this.toDate = toDate; }
}
