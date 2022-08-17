import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import {useSelector} from "react-redux";
import Comments from "../../components/Comments";

// css
import "./board.scss";
import moment from "moment";


const Board = () => {
  // URL 파라미터 받기 - book의 isbn
  const {isbn} = useParams();
  const [bookDetail, setBookDetail] = useState({});
  // const navigate = useNavigate();
  
  // board 가져오기
  useEffect(() => {
    const getBookDetail = async () => {
      const url = "http://i7d211.p.ssafy.io:8081/book/bookDetail"
      const {data} = await axios.get(`${url}?ISBN=${isbn}`);
      return data;
    }
    getBookDetail().then(result => setBookDetail(result));
  }, [isbn])
  
  return (
    <div className="board-wrapper">
      <div className="board-header">
        <div className="board-header-username">작성자 :  {bookDetail.id}</div>
        <div className="board-header-date">작성일 : {moment(bookDetail.created_date).add(9, "hour").format('YYYY-MM-DD')}</div>
      </div>

      <hr/>
      <div className="board-body">
        <div className="board-title-content">
          <div className="board-title">{bookDetail.title}</div>
          <div className="board-content">{bookDetail.story}</div>
        </div>
      </div>

      <hr/>
      <div className="board-footer">
        <Comments 
            key={isbn}
            isbn={isbn}
        />
      </div>
    </div>
  );
}
export default Board;