import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
import {jwtUtils} from "../../utils/jwtUtils";

// css
import TextArea from "../../components/TextArea";
import {Button} from "@mui/material";
import "./addBoard.scss";

const AddBoard = () => {
  const token = useSelector(state => state.Auth.token);
  const navigate = useNavigate();

  // 제목, 내용
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const canSubmit = useCallback(() => {
    return title !== "" && content !== "";
  }, [title, content]);

  const handleSubmit = useCallback(async () => {
    axios.defaults.withCredentials = true;

    const inputData = {
      "id" : jwtUtils.getId(token),
      "title" : title, 
      "story" : content,
      "type" : "notice",
    }

    const config = {
      headers:{
        'X-AUTH-TOKEN': token,
      }
    }
    
    try{
      const {data} = await axios.put("/board/board", 
      inputData, config
      );

      if (data === "success") {
        window.alert("등록이 완료되었습니다.");
        navigate("/");
      }
      
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e)
    }

  }, [navigate, token, content, title,]);

  return (
    <div className="addBoard-wrapper">
      <div className="addBoard-header">
        등록하기
      </div>

      <div className="submitButton">
        {canSubmit() ? (
          <Button
            onClick={handleSubmit}
            className="success-button"
            variant="outlined"
          >
            등록
          </Button>
        ) : (
          <Button
            className="disable-button"
            variant="outlined"
            size="large"
          >
            제목과 내용을 모두 입력하세요.
          </Button>
        )}
      </div>

      <div className="addBoard-body">
        <TextArea 
          setTitle={setTitle} 
          setContent={setContent} 
          title={title} 
          content={content}
        />
      </div>
    </div>
  );
}

export default AddBoard;