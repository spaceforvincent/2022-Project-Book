package com.example.demo.mapper;

import com.example.demo.dto.BookDto;
import com.example.demo.dto.TestDto;
import com.example.demo.dto.UsageDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface TestMapper {

    List<TestDto> getUserList();
    int insertBookApiData(BookDto dto);
    int borrow(UsageDto dto);

    int return_book(Map<String,String> map);

    List<BookDto> search(String keyword);
}