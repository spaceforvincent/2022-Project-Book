package com.example.demo.controller;

import com.example.demo.dto.TestDto;
import com.example.demo.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TestController {

    private final TestService testService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Object test() {
        return "Hello World!";
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<TestDto> getUser() {
        return testService.getUserList();
    }

    @RequestMapping(value = "/bookApiData", method = RequestMethod.POST)
    public String insertBookApiData() {
        return testService.insertBookApiData();
    }
}