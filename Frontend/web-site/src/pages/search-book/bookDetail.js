import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import {useSelector} from "react-redux";
import Reviews from "../../components/Reviews";

// css
import "../board/board.scss";
import moment from "moment";


const Board = () => {
  // URL 파라미터 받기 - book의 isbn
  const {isbn} = useParams();
  const [bookDetail, setBookDetail] = useState({});
  
  // board 가져오기
  useEffect(() => {
    const getBookDetail = async () => {
      const url = "http://i7d211.p.ssafy.io:8081/book/detail"
      const {data} = await axios.get(`${url}?ISBN=${isbn}`);

      return data;
    }
    getBookDetail().then(result => setBookDetail(result));
  }, [isbn])
  
  return (
    <div className="board-wrapper">
      <div className="board-header">
        <div className="board-header-username">{bookDetail.title}</div>
      </div>

      <hr/>
      <div className="board-body">
        <div className="board-title-content">
          <div className="board-content">{bookDetail.author}</div>
          <div className="board-content">{bookDetail.story}</div>
          <div className="book-card-body-img">
            <img src={bookDetail.cover} alt="이미지 없음"/>
          </div> {isbn}
          <div className="board-header-date">출간일: {moment(bookDetail.publish_date).add(9, "hour").format('YYYY-MM-DD')}</div>
          <div className="board-content">장르 : {bookDetail.genre}</div>
          <div className="board-content">리뷰 수 : {bookDetail.number_of_reviews}</div>
          <div className="board-content">대여 횟수 : {bookDetail.number_of_rental}</div>
        </div>
      </div>

      <hr/>
      <div className="board-footer">
        <Reviews 
            key={isbn}
            isbn={isbn}
        />
      </div>
    </div>
  );
}
export default Board;