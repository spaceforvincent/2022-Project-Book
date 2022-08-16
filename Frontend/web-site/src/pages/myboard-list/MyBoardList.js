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


// 한 페이지당 표시할 수
var totalPost = 8

// 페이지에 맞는 게시글 불러올 함수
const getBoardList = async (token, page) => {
  const url = "http://i7d211.p.ssafy.io:8081/board/boardAll"
  const id = jwtUtils.getId(token);
  const {data} = await axios.get(`${url}?boardType=notice`);

  var temp = []
  var newData = []

  for (var i=0; i < data.length; i++) {
    if (data[i].id === id) {
      temp.push(data[i]) 
    }
  }

  for (var j = (page-1)*totalPost; j < page*totalPost; j ++) {
    // 총 게시글 수 보다 많아지면 중단
    if (j >= temp.length) {
      break

    } else {
      newData.push(temp[j])
    }
  }

  return newData;
}

const MyBoardList = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [boardList, setBoardList] = useState([]);
  const [searchParams] = useSearchParams();
  const token = useSelector(state => state.Auth.token);

  useEffect(() => {
    // 페이지에 해당하는 게시물 가져오기
    getBoardList(token, page)

    // 현재 페이지에 해당하는 게시물로 상태 변경하기
    .then(result => setBoardList(result));

    // 게시물 전체 갯수 구하기
    const getTotalBoard = async () => {
      const url = "http://i7d211.p.ssafy.io:8081/board/boardAll"
      const id = jwtUtils.getId(token);
      const {data} = await axios.get(`${url}?boardType=notice`);
      
      var newData = []

      for (var i=0; i < data.length; i++) {
        if (data[i].id === id) {
          newData.push(data[i]) 
        }
      }

      return newData.length;
    }

    // 페이지 카운트 구하기
    getTotalBoard().then(result => setPageCount(Math.ceil(result / totalPost)));
      console.log()
  }, [searchParams, token, page])

  return (
    <div className="boardList-wrapper">
      <div className="boardList-header">
        내가 작성한 글
      </div>

      <div className="boardList-body">
        {boardList.map((item, index) => (
          <Card 
            key={item.board_id}
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
        {/*페이지네이션*/}
        <Pagination
          variant="outlined" 
          color="primary" 
          page={Number(page)}
          count={pageCount} 
          size="large"
          onChange={(e, value) => {
            setPage(value)

            getBoardList(token, value)
            .then(result => setBoardList(result));
          }}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  )
}
export default MyBoardList;