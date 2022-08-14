import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card = ({board_id, title, content, id, date}) => {
  const navigate = useNavigate();

  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-text">
        <div className="card-body-text-title">제목 : {title}</div>
        <div className="card-body-text-content">내용 : {content}</div>
      </div>

      <div className="card-footer">
        <div className="username">작성자 : {id}</div>
        <div className="date">작성일 : {date}</div>
      </div>
    </div>
  );
};