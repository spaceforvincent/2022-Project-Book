//import axios from "axios";

//css
import "./book.scss";

export const Card = ({ isbn, rental_date, return_date, return_check }) => {
  // const getBookName = async (isbn) => {
  //   const url = "http://i7d211.p.ssafy.io:8081/book/detail"
  //   const {data} = await axios.get(`${url}?ISBN=${isbn}`);

  //   return data.title;
  // }

  return (
    <div className="card-wrapper">
      <div className="card-body-text">
        {/* <div className="card-body-text-title">책 제목 : {}</div> */}
        <div className="card-body-text-content">도서번호 : {isbn}</div>

        <div className="card-body-text-content">대여일 : {rental_date}</div>
        <div className="card-body-text-content">반납일 : {return_date}</div>

        {return_check ? (
          <div className="card-body-text-content">반납여부 : O </div>
        ) : (
          <div className="card-body-text-content">반납여부 : X </div>
        )}
      </div>
    </div>
  );
};