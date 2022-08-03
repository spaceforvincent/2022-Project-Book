package com.example.demo.service;

import com.example.demo.dto.BoardDto;
import com.example.demo.dto.BookDto;
import com.example.demo.dto.UsageDto;
import com.example.demo.mapper.BoardMapper;
import com.example.demo.mapper.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardMapper boardMapper;

    public List<BoardDto> noticeAll() {
        return boardMapper.noticeAll();


    }
}
