package com.example.demo.service;

import com.example.demo.dto.BookDto;
import com.example.demo.dto.UsageDto;
import com.example.demo.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService{
    private final TestMapper testMapper;
    @Override
    public List<UsageDto> borrow(List<String> isbns) {
        List<UsageDto> registList=new ArrayList<UsageDto>();
        String id=SecurityContextHolder.getContext().getAuthentication().getName();
        for(String isbn:isbns){
            UsageDto dto = new UsageDto();
            Date date = new Date();
            Calendar cal = Calendar.getInstance();
            cal.add(Calendar.DATE, 14);
            Date return_date = new Date(cal.getTimeInMillis());
            dto.setId(id);
            dto.setISBN(isbn);
            dto.setRental_date(date);
            dto.setReturn_date(return_date);
            if(testMapper.borrow(dto)==1)
                registList.add(dto);
        }

        return registList;
    }

    @Override
    public List<String> return_book(List<String> isbns) {
        List<String> returnList=new ArrayList<>();
        for(String isbn:isbns){
            Map<String,String> map = new HashMap<>();
            map.put("ISBN",isbn);
            if(testMapper.return_book(map)==1)
                returnList.add(isbn);
        }

        return returnList;
    }

    @Override
    public List<BookDto> search(String keyword) {
        return testMapper.search("%"+keyword+"%");


    }
}
