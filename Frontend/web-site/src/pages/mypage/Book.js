//import axios from "axios"; css
import "./book.scss";

export const Card = ({
    isbn,
    rental_date,
    return_date,
    return_check,
    title,
    cover
}) => {
    // const getBookName = async (isbn) => {   const url =
    // "http://i7d211.p.ssafy.io:8081/book/detail"   const {data} = await
    // axios.get(`${url}?ISBN=${isbn}`);   return data.title; }
    return (
        <div className="card-wrapper">
            <img
                src={cover}
                style={{
                    width: "150px",
                    height: "150px",
                    margin: 50
                }}
                alt="dummy"></img>
            <div className="card-body-text">
                {/* <div className="card-body-text-title">책 제목 : {}</div> */}
                {
                    title.length > 25
                        ? <div className="card-body-text-content">
                                <span className="text">{title}</span>
                            </div>
                        : <div className="card-body-text-content">
                                <span className="text">{title}</span>
                                <div className="text">&nbsp; </div>
                            </div>
                }

                <div className="card-body-text-content">대여일 : {rental_date}</div>
                <div className="card-body-text-content">반납일 : {return_date}</div>
                {
                    return_check
                        ? (
                            <div className="finish" >반납여부 : 반납완료
                            </div>
                        )
                        : (
                            <div className="disfinish">반납여부 : 대여중
                            </div>
                        )
                }
            </div>
        </div>
    );
};