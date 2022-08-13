import axios from "axios";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {jwtUtils} from "../../utils/jwtUtils";
import moment from "moment";

// css
import {Pagination} from "@mui/material";
import {Card} from "../../components/Card";
import "../board-list/boardList.scss";

const MyBoardList = () => {
  const [pageCount, setPageCount] = useState(0);
  const [boardList, setBoardList] = useState([]);
  const [searchParams] = useSearchParams();
  // user의 id를 알아내기 위해 token 가져오기
  const token = useSelector(state => state.Auth.token);

  useEffect(() => {
    // 페이지에 해당하는 게시물 가져오기
    const getBoardList = async () => {
      // const page_number = searchParams.get("page");
      const url = "http://i7d211.p.ssafy.io:8081/board/boardAll"
      const id = jwtUtils.getId(token);
      const {data} = await axios.get(`${url}?boardType=notice&id=${id}`);
      return data;
    }

    // 현재 페이지에 해당하는 게시물로 상태 변경하기
    getBoardList().then(result => setBoardList(result));

    // 게시물 전체 갯수 구하기
    const getTotalBoard = async () => {
      const url = "http://i7d211.p.ssafy.io:8081/board/boardAll"
      const id = jwtUtils.getId(token);
      const {data} = await axios.get(`${url}?boardType=notice&id=${id}`);
      return data.total;
    }

    // 페이지 카운트 구하기
    getTotalBoard().then(result => setPageCount(Math.ceil(result / 4)));
  }, [token])

  return (
    <div className="boardList-wrapper">
      <div className="boardList-header">
        내가 작성한 글
      </div>

      <div className="boardList-body">
        {boardList.map((item, index) => (
          <Card key={item.board_id} 
            id={item.id} 
            date={moment(item.created_date).add(9, "hour").format('YYYY-MM-DD')}
            title={item.title} 
            content={item.story}
            answers={item.answers}
          />
        ))}
      </div>

      <div className="boardList-footer">
        {/*페이지네이션*/}
        <Pagination
          variant="outlined" 
          color="primary" 
          page={Number(searchParams.get("page"))}
          count={pageCount} 
          size="large"
          onChange={(e, value) => {
            window.location.href = `/myboard-list?page=${value}`;
          }}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  )
}
export default MyBoardList;