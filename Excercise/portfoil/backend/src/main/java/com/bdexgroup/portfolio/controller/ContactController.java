package com.bdexgroup.portfolio.controller;

import com.bdexgroup.portfolio.dto.ApiResponse;
import com.bdexgroup.portfolio.dto.ContactMessageRequest;
import com.bdexgroup.portfolio.dto.ContactMessageResponse;
import com.bdexgroup.portfolio.service.ContactMessageService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMessageService contactMessageService;

    @PostMapping
    public ApiResponse<ContactMessageResponse> submit(@Valid @RequestBody ContactMessageRequest request,
                                                      HttpServletRequest httpRequest) {
        ContactMessageResponse created = contactMessageService.create(request, httpRequest);
        return ApiResponse.success("Message received", created);
    }

    @GetMapping
    public ApiResponse<List<ContactMessageResponse>> list() {
        return ApiResponse.success("OK", contactMessageService.listAll());
    }
}

