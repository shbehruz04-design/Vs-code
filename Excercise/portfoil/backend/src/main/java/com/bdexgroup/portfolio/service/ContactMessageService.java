package com.bdexgroup.portfolio.service;

import com.bdexgroup.portfolio.dto.ContactMessageRequest;
import com.bdexgroup.portfolio.dto.ContactMessageResponse;
import com.bdexgroup.portfolio.model.ContactMessage;
import com.bdexgroup.portfolio.repository.ContactMessageRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactMessageService {

    private final ContactMessageRepository contactMessageRepository;

    public ContactMessageResponse create(ContactMessageRequest request, HttpServletRequest httpRequest) {
        ContactMessage message = new ContactMessage();
        message.setName(safeTrim(request.getName()));
        message.setEmail(safeTrim(request.getEmail()));
        message.setSubject(safeTrim(request.getSubject()));
        message.setMessage(safeTrim(request.getMessage()));
        message.setReadStatus(false);

        if (httpRequest != null) {
            message.setIpAddress(extractClientIp(httpRequest));
            message.setUserAgent(safeTrim(httpRequest.getHeader("User-Agent")));
        }

        ContactMessage saved = contactMessageRepository.save(message);
        return toResponse(saved);
    }

    public List<ContactMessageResponse> listAll() {
        return contactMessageRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"))
                .stream()
                .map(ContactMessageService::toResponse)
                .toList();
    }

    private static ContactMessageResponse toResponse(ContactMessage message) {
        if (message == null) {
            return ContactMessageResponse.builder().build();
        }

        return ContactMessageResponse.builder()
                .id(message.getId())
                .name(message.getName())
                .email(message.getEmail())
                .subject(message.getSubject())
                .message(message.getMessage())
                .createdAt(message.getCreatedAt())
                .readStatus(message.getReadStatus())
                .build();
    }

    private static String extractClientIp(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return forwarded.split(",", 2)[0].trim();
        }
        return request.getRemoteAddr();
    }

    private static String safeTrim(String value) {
        if (value == null) return null;
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }
}

