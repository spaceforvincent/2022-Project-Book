import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Formik} from "formik";
import * as Yup from "yup";

// css 영역
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Button, TextField} from "@mui/material";
import "./signUp.scss";


const SignUp = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다.")
      .required("이메일을 입력하세요."),

    password: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다.")
      .max(16, "비밀번호는 최대 16자리입니다.")
      .required("비밀번호를 입력하세요.")
      .matches(
      // eslint-disable-next-line
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다."
      )
      ,

    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("필수 입력 값입니다."),

    phonenumber: Yup.string()
      .required("전화번호를 입력하세요."),

    address: Yup.string()
      .required("주소를 입력하세요."),

    name: Yup.string()
      .min(2, "이름은 최소 2글자 이상입니다.")
      .max(10, "이름은 최대 10글자입니다.")
      .matches(
        // eslint-disable-next-line
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "이름에 특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다."
      )
      .required("이름을 입력하세요."),

    gender: Yup.string()
      .oneOf(["0","1"],
        "셩별은 '남성' 이면 '0'을 '여성' 이면 '1' 로 입력해야 합니다.")
      .required("성별을 입력하세요."),

    birthday: Yup.date()
      .typeError("생일은 2022/01/01 과 같이 작성해야 합니다.")
      .required("생일을 입력하세요."),
    
  });
  
  const submit = async (values) => {
    const {email, password, phonenumber, address, name, gender, birthday} = values;

    const inputData = { email, password, phonenumber, address, name, gender, birthday }

    try {
      // console.log(inputData)

      const {data} = await axios.post("http://i7d211.p.ssafy.io:8081/user/signUp", 
      inputData
      );

      // 회원가입 성공 -> 데이터 반환값 존재
      if (data.name) {
        toast.success(<h3>회원가입이 완료되었습니다.<br/>로그인 하세요.</h3>, {
          position: "top-center",
          autoClose: 2000
        });
        
        setTimeout(()=> {
          navigate("/login");
        }, 2000);
      }

    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e)
    }
  };

  return (
    <Formik
      initialValues={{
        email: "", password: "", phonenumber: "", address: "", name: "", gender: "", birthday: ""
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({values, handleSubmit, handleChange, errors}) => (
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
                  {errors.email}
                </div>
              </div>

              <div className="input-forms-item">
                <div className="input-label">비밀번호</div>
                <TextField autoComplete="off"
                  value={values.password}
                  name="password"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.password}
                </div>
              </div>

              <div className="input-forms-item">
                <div className="input-label">비밀번호 확인</div>
                <TextField autoComplete="off"
                  value={values.password2}
                  name="password2"
                  variant="outlined"
                  type="password"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.password2}
                </div>
              </div>

              <div className="input-forms-item">
                <div className="input-label">전화번호</div>
                <TextField
                  value={values.phonenumber}
                  name="phonenumber"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.phonenumber}
                </div>
              </div>

              <div className="input-forms-item">
                <div className="input-label">주소</div>
                <TextField
                  value={values.address}
                  name="address"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.address}
                </div>
              </div>

              <div className="input-forms-item">
                <div className="input-label">이름</div>
                <TextField
                  value={values.username}
                  name="name"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.name}
                </div>
              </div>

              <div className="input-forms-item">
                <div className="input-label">성별</div>
                <TextField
                  value={values.gender}
                  name="gender"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.gender}
                </div>
              </div>

              <div className="input-forms-item">
                <div className="input-label">생년월일</div>
                <TextField
                  value={values.birthday}
                  name="birthday"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="error-message">
                  {errors.birthday}
                </div>
              </div>

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                회원가입
              </Button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
