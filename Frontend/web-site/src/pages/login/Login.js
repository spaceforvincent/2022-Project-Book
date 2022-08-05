import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Formik, ErrorMessage} from "formik";
import * as Yup from "yup";
import {Button, TextField} from "@mui/material";
import {useNavigate, useSearchParams} from "react-router-dom";

// SignUp 컴포넌트 scss 이용
import "../sign-up/signUp.scss";
import {useDispatch} from "react-redux";
import {setToken} from "../../redux/reducers/AuthReducer";

const Login = () => {
  const navigate = useNavigate();

  // 쿼리 파라미터 받아오기
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다!")
      .required("이메일을 입력하세요!"),
    password: Yup.string()
      .required("패스워드를 입력하세요!")
  });
  const submit = async (values) => {
    const {email, password} = values;
    try {
      const {data} = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      dispatch(setToken(data.jwt));
      const redirectUrl = searchParams.get("redirectUrl");
      toast.success(<h3>로그인 성공</h3>, {
        position: "top-center",
        autoClose: 2000
      });
   
      setTimeout(()=> {
        if (redirectUrl) {
          navigate(redirectUrl);
        } else {
          navigate("/");
        }
      }, 2000);

    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      {({values, handleSubmit, handleChange}) => (
        <div className="signup-wrapper">
          <ToastContainer/>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="input-forms">
              <div className="input-forms-item">
                <div className="input-label">계정</div>
                <TextField
                  value={values.email}
                  name="email"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="email"/>
                </div>
              </div>
              <div className="input-forms-item">
                <div className="input-label">비밀번호</div>
                <TextField
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="password"/>
                </div>
              </div>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                로그인
              </Button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Login;