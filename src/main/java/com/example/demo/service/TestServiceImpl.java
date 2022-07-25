package com.example.demo.service;

import com.example.demo.dto.TestDto;
import com.example.demo.mapper.TestMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import jdk.nashorn.internal.parser.JSONParser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.demo.dto.BookDto;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TestServiceImpl implements TestService {

    private final TestMapper testMapper;

    @Override
    public List<TestDto> getUserList() {
        return testMapper.getUserList();
    }

    @Override
    public int insertBookApiData() {
        /*
        StringBuffer result = new StringBuffer();
        try{
                URL url = new URL();
                HttpURLConnection urlConnection = (HttpURLConnection)url.openConnection();
                urlConnection.setRequestMethod("GET");
                urlConnection.setRequestProperty("content-type","application/json");

            BufferedReader bf = new BufferedReader(new InputStreamReader(url.openStream(),"UTF-8"));
            result.append(bf.readLine());
            JSONParser jsonParser=new JSONParser();
            JSONObject jsonObject = (JSONObject) jsonParser.parse(result.toString());
            JSONArray jsonArray= (JSONArray) jsonObject.get("data");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
*/
        BookDto dto = new BookDto();
        Date date = new Date();

        dto.setISBN("124");
        dto.setTitle("title");
        dto.setAuthor("author");
        dto.setIndex("index");
        dto.setCover("cover");
        dto.setStory("story");
        dto.setPublish_date(date);
        dto.setGenre("genre");
        dto.setType("type");
        dto.setPosition("pos");
        dto.setNumber_of_reviews(1);
        dto.setNumber_of_rental(2);
        dto.setContent("content");

        return testMapper.insertBookApiData(dto);
    }
}