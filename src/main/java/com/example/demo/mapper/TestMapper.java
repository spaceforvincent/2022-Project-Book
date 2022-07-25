package com.example.demo.mapper;

import com.example.demo.dto.BookDto;
import com.example.demo.dto.TestDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestMapper {

    List<TestDto> getUserList();
    int insertBookApiData(BookDto dto);
}