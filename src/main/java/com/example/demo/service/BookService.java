package com.example.demo.service;

import com.example.demo.dto.BookDto;
import com.example.demo.dto.UsageDto;

import java.util.List;

public interface BookService {
    List<UsageDto> borrow(String id, List<String> isbns);
    List<String> return_book(String id, List<String> isbns);

    List<BookDto> search(String keyword);
}
