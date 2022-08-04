import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import ImageUploader from "../../components/ImageUploader";
import api from "../../utils/api";
import TextArea from "../../components/TextArea";
import {Button} from "@mui/material";
import "../add-board/addBoard.scss";
import axios from "axios";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EditBoard = () => {
  const token = useSelector(state => state.Auth.token);
  const navigate = useNavigate();

  // URI 파라미터 가져오기
  const {board_id} = useParams();

  // 게시판 제목, 내용, 사진
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "image/default_image.png",
  });

  useEffect(() => {
    const getBoard = async () => {
      const {data} = await axios.get(`/api/board/${board_id}`);
      return data;
    }
    getBoard().then((result) => {
      setTitle(result.title);
      setContent(result.content);
      setImage({...image, preview_URL: `/api/image/view/${board_id}`})
    });
  }, [])

  const canSubmit = useCallback(() => {
    return content !== "" && title !== "";
  }, [image, title, content]);

  const handleSubmit = useCallback(async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      // 이미지를 선택했을 때만 formdata에 넣음
      formData.append("file", image.image_file);
      // 수정할 땐 board_id를 보내자
      formData.append("id", board_id);
      await api.put("/api/board", formData);
      window.alert("수정이 완료되었습니다.");
      // 이전 페이지로 돌아가기
      window.location.href = `/board/${board_id}`;
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error("오류발생! 이모지를 사용하면 오류가 발생할 수 있습니다.", {
        position: "top-center",
      });
    }

  }, [canSubmit]);

  return (
    <div className="addBoard-wrapper">
      <div className="addBoard-header">
        게시물 수정하기 🖊️
      </div>
      <div className="submitButton">
        {canSubmit() ? (
          <Button
            onClick={handleSubmit}
            className="success-button"
            variant="outlined"
          >
            수정하기😃
          </Button>
        ) : (
          <Button
            className="disable-button"
            variant="outlined"
            size="large"
          >
            제목과 내용을 모두 입력하세요😭
          </Button>
        )}
      </div>
      <div className="addBoard-body">
        <ImageUploader setImage={setImage} preview_URL={image.preview_URL}/>
        <TextArea setTitle={setTitle} setContent={setContent} title={title} content={content}/>
      </div>
    </div>
  );
}

export default EditBoard;