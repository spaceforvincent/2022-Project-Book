package com.example.demo.mapper;

import com.example.demo.dto.BookDto;
import com.example.demo.dto.TestDto;
import com.example.demo.dto.UsageDto;
import com.example.demo.security.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface UserMapper {

    UserDto searchByEmail(String email);

    int registUser(UserDto dto);
}