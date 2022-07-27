package com.example.demo.service;

import com.example.demo.dto.TestDto;
import com.example.demo.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.demo.dto.BookDto;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        StringBuilder response = new StringBuilder();
        String apiURL = "https://openapi.naver.com/v1/search/book.json?query=%EC%A3%BC%EC%8B%9D&display=10&start=1";    // json 결과


        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("X-Naver-Client-Id", "lFDP2MofxMD2Fenvzk06");
        requestHeaders.put("X-Naver-Client-Secret", "XOuEwKBEln");
        String responseBody = get(apiURL,requestHeaders);
        System.out.println(responseBody);
        JSONParser jsonParser = new JSONParser();
        JSONArray JArray=new JSONArray();
        JSONObject jsonObject;
        try {
            jsonObject = (JSONObject) jsonParser.parse(responseBody);

        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
        long total = (long) jsonObject.get("total");
        long pageNum = (long)jsonObject.get("start");
        long pageSize = (long)jsonObject.get("display");


        response.append("전체 결과 수 : "+total+"\n");
        response.append("페이지 개수 : "+pageNum+"\n");
        response.append("페이지 크기 : "+pageSize+"\n");



        JSONArray resultArray = (JSONArray)jsonObject.get("items");

        System.out.println(resultArray.get(0).toString());

        for(int i=0;i<resultArray.size();i++){
            JSONObject resultTemp= (JSONObject) resultArray.get(i);

            BookDto dto = new BookDto();
            String dateStr = (String) resultTemp.get("pubdate");
            SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
            Date date;
            try {
                date = formatter.parse(dateStr);
            } catch (java.text.ParseException e) {
                throw new RuntimeException(e);
            }



            dto.setISBN((String) resultTemp.get("isbn"));
            dto.setTitle((String) resultTemp.get("title"));
            dto.setAuthor((String) resultTemp.get("author"));
            dto.setIndex("index");
            dto.setCover((String) resultTemp.get("image"));
            dto.setStory("story");
            dto.setPublish_date(date);
            dto.setGenre("genre");
            dto.setType("type");
            dto.setPosition("pos");
            dto.setNumber_of_reviews(0);
            dto.setNumber_of_rental(0);
            dto.setContent((String) resultTemp.get("description"));
            if(dto.getISBN().equals("")) {
                response.append("isbn null\n");
                continue;
            }
            if(testMapper.insertBookApiData(dto)==1) {
                response.append("도서 정보 등록 : " + (String) resultTemp.get("title")+"\n");
            }
        }


        return response.toString();

    }

    private String get(String apiUrl, Map<String, String> requestHeaders){
        HttpURLConnection con = connect(apiUrl);
        try {
            con.setRequestMethod("GET");
            for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }

            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 호출
                return readBody(con.getInputStream());
            } else { // 에러 발생
                return readBody(con.getErrorStream());
            }
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }
    private static String readBody(InputStream body){
        InputStreamReader streamReader = new InputStreamReader(body);

        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
            StringBuilder responseBody = new StringBuilder();

            String line;
            while ((line = lineReader.readLine()) != null) {
                //System.out.println(line);
                responseBody.append(line);
            }

            return responseBody.toString();
        } catch (IOException e) {
            throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
        }
    }
    private HttpURLConnection connect(String apiUrl){
        try {
            URL url = new URL(apiUrl);
            return (HttpURLConnection)url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
        }
    }
}