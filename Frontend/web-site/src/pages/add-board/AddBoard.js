/* eslint-disable react-hooks/exhaustive-deps */
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
// import ImageUploader from "../../components/ImageUploader";
import api from "../../utils/api";
import {jwtUtils} from "../../utils/jwtUtils";
import TextArea from "../../components/TextArea";
import {Button} from "@mui/material";
import "./addBoard.scss";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBoard = () => {
  const token = useSelector(state => state.Auth.token);
  const navigate = useNavigate();

  // 게시판 제목, 내용, 사진
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [image, setImage] = useState({
  //   image_file: "",
  //   preview_URL: "image/default_image.png",
  // });
  // const canSubmit = useCallback(() => {
  //   return image.image_file !== "" && content !== "" && title !== "";
  // }, [image, title, content]);

  const canSubmit = useCallback(() => {
    return content !== "" && title !== "";
  }, [title, content]);

  const handleSubmit = useCallback(async () => {
    try{
      // formData.append("file", image.image_file);

      const {data} = await api.put("http://i7d211.p.ssafy.io:8081/board/board", 
      JSON.stringify({"id" : jwtUtils.getId(token),"title" : title, "story" : content,"type" : "notice", }));

      if (data === "success") {
        window.alert("등록이 완료되었습니다.");
        navigate("/board-list");
      }

    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error("오류발생!", {
        position: "top-center",
      });
    }

  }, [canSubmit]);

  return (
    <div className="addBoard-wrapper">
      <div className="addBoard-header">
        게시물 등록하기
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
        {/* <ImageUploader setImage={setImage} preview_URL={image.preview_URL}/> */}
        <TextArea setTitle={setTitle} setContent={setContent} title={title} content={content}/>
      </div>
    </div>
  );
}

export default AddBoard;