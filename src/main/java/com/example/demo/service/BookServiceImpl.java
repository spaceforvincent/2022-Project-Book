package com.example.demo.service;

import com.example.demo.dto.UsageDto;
import com.example.demo.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService{
    private final TestMapper testMapper;
    @Override
    public List<UsageDto> borrow(String id, List<String> isbns) {
        List<UsageDto> registList=new ArrayList<UsageDto>();
        for(String isbn:isbns){
            UsageDto dto = new UsageDto();
            Date date = new Date();
            Calendar cal = Calendar.getInstance();
            cal.add(Calendar.DATE, 7);
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
}
