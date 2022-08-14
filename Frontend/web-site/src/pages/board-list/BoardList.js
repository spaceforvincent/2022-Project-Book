import axios from "axios";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

// css
import {Pagination} from "@mui/material";
import {Card} from "../../components/Card";
import "./boardList.scss";
import moment from "moment";


// 한 페이지당 표시할 수
var totalPost = 8

// 페이지에 맞는 게시글 불러올 함수
const getBoardList = async (page) => {
  const url = "http://i7d211.p.ssafy.io:8081/board/boardAll"
  const {data} = await axios.get(`${url}?boardType=notice`);

  var newData = []

  for (var i = (page-1)*totalPost; i < page*totalPost; i ++) {
    // 총 게시글 수 보다 많아지면 중단
    if (i >= data.length) {
      break

    } else {
      newData.push(data[i])
    }
  }
  return newData;
}

const BoardList = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [boardList, setBoardList] = useState([]);
  const [searchParams] = useSearchParams();
  

  useEffect(() => {
    // 페이지에 해당하는 게시물 가져오기
    getBoardList(page)

    // 현재 페이지에 해당하는 게시물로 상태 변경하기
    .then(result => setBoardList(result));

    // 게시물 전체 갯수 구하기
    const getTotalBoard = async () => {
      const url = "http://i7d211.p.ssafy.io:8081/board/boardAll"
      const {data} = await axios.get(`${url}?boardType=notice`);

      return data.length;
    }

    // 페이지 카운트 구하기: (전체 board 갯수) / (한 페이지 갯수) 결과 올림
    getTotalBoard().then(result => setPageCount(Math.ceil(result / totalPost)));
  }, [page, searchParams])

  return (
    <div className="boardList-wrapper">
      <div className="boardList-header">
        전체 게시물
      </div>

      <div className="boardList-body">
        {boardList.map((item, index) => (
          <Card 
            key ={item.board_id}
            board_id={item.board_id}
            id={item.id} 
            date={moment(item.created_date).add(9, "hour").format('YYYY-MM-DD')}
            title={item.title} 
            content={item.story}
            answers={item.answers}
          />
        ))}
      </div>

      <div className="boardList-footer">
        {/* pagination : count에 페이지 카운트, page에 페이지 번호 넣기 */}
        <Pagination
          variant="outlined" 
          color="primary" 
          page={Number(page)}
          count={pageCount} 
          size="large"
          onChange={(e, value) => {
            setPage(value)

            getBoardList(value)
            .then(result => setBoardList(result));
          }}
          showFirstButton 
          showLastButton
        />
      </div>
    </div>
  )
}
export default BoardList;