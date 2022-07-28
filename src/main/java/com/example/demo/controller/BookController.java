package com.example.demo.controller;

import com.example.demo.dto.BookDto;
import com.example.demo.dto.TestDto;
import com.example.demo.dto.UsageDto;
import com.example.demo.service.BookService;
import com.example.demo.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Book;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;
    @RequestMapping(value = "/book/borrow", method = RequestMethod.PUT)
    public List<UsageDto> borrow(@RequestParam("id") String id, @RequestParam("ISBN") List<String> isbns) {
        return bookService.borrow(id,isbns);
    }
    @RequestMapping(value = "/book/return", method = RequestMethod.PUT)
    public List<String> return_book(@RequestParam("id") String id, @RequestParam("ISBN") List<String> isbns) {
        return bookService.return_book(id,isbns);
    }

    @RequestMapping(value = "/book/search", method = RequestMethod.GET)
    public List<BookDto> search(@RequestParam("keyword") String keyword) {
        return bookService.search(keyword);
    }
}
