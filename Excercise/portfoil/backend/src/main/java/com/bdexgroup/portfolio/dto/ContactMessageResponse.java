package com.bdexgroup.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Data Transfer Object for Contact Message Response
 * 
 * This DTO is used to return contact message information
 * to the frontend or admin panel.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContactMessageResponse {

    private Long id;
    private String name;
    private String email;
    private String subject;
    private String message;
    private LocalDateTime createdAt;
    private Boolean readStatus;

    /**
     * Create a response with just a success message
     */
    public static ContactMessageResponse success(String message) {
        return ContactMessageResponse.builder()
                .message(message)
                .build();
    }
}
