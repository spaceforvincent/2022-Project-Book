package com.example.demo.service;

import com.example.demo.dto.UsageDto;

import java.util.List;

public interface BookService {
    public List<UsageDto> borrow(String id, List<String> isbns);

}
