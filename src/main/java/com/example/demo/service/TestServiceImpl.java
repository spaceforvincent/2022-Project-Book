package com.example.demo.service;

import com.example.demo.dto.TestDto;
import com.example.demo.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.demo.dto.BookDto;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.JSONValue;
import org.json.simple.parser.ParseException;
@Service
@RequiredArgsConstructor
public class TestServiceImpl implements TestService {

    private final TestMapper testMapper;

    @Override
    public List<TestDto> getUserList() {
        return testMapper.getUserList();
    }

    @Override
    public String insertBookApiData() {
        String key = "5430dc48271200b09a22b179c41d62e38160df77c5c72639035f05cc31e22c40";
        String url_temp1="https://www.nl.go.kr/NL/search/openApi/search.do?key=5430dc48271200b09a22b179c41d62e38160df77c5c72639035f05cc31e22c40&srchTarget=author&apiType=json&kwd=";
        String url_temp2="도스토옙스키";
        // 파싱한 데이터를 저장할 변수
        String result = "";
        System.out.println(url_temp1);
        StringBuilder response = new StringBuilder();
        try {
            url_temp2=URLEncoder.encode(url_temp2, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        try {
            //System.out.println(url_temp);
            URL url = new URL(url_temp1+url_temp2);

            BufferedReader bf;

            bf = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));

            result = bf.readLine();

            JSONParser jsonParser = new JSONParser();
            JSONArray JArray=new JSONArray();

            JSONObject jsonObject = (JSONObject)jsonParser.parse(result);


            long total = (long) jsonObject.get("total");
            String kwd = (String)jsonObject.get("kwd");
            long pageNum = (long)jsonObject.get("pageNum");
            long pageSize = (long)jsonObject.get("pageSize");


            response.append("전체 결과 수 : "+total+"\n");
            response.append("키워드 : "+kwd.toString()+"\n");
            response.append("페이지 개수 : "+pageNum+"\n");
            response.append("페이지 크기 : "+pageSize+"\n");



            JSONArray resultArray = (JSONArray)jsonObject.get("result");

            System.out.println(jsonObject.toString());
            System.out.println(resultArray.get(0).toString());

            for(int i=0;i<resultArray.size();i++){
                JSONObject resultTemp= (JSONObject) resultArray.get(i);

                BookDto dto = new BookDto();
                String dateStr = (String) resultTemp.get("regDate");
                SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
                Date date = formatter.parse(dateStr);
                /*
                String s=(String) resultTemp.get("authorInfo");
                System.out.println(s.length());
                */
        dto.setISBN((String) resultTemp.get("isbn"));
        dto.setTitle((String) resultTemp.get("titleInfo"));
        dto.setAuthor((String) resultTemp.get("authorInfo"));
        dto.setIndex("index");
        dto.setCover("cover");
        dto.setStory("story");
        dto.setPublish_date(date);
        dto.setGenre("genre");
        dto.setType("type");
        dto.setPosition("pos");
        dto.setNumber_of_reviews(0);
        dto.setNumber_of_rental(0);
        dto.setContent("content");
    if(dto.getISBN().equals("")) {
        response.append("isbn null\n");
        continue;
    }
                if(testMapper.insertBookApiData(dto)==1) {
                    response.append("도서 정보 등록 : " + (String) resultTemp.get("titleInfo")+"\n");
                }
            }

        }catch(Exception e) {
            e.printStackTrace();
        }

        return response.toString();

    }
}