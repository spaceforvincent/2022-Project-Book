import { HangulImeInputWrapper } from "mole-virtual-keyboard";
import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./styles.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

let inputWrapper: HangulImeInputWrapper | undefined = undefined;

export default function VirtualKeyboard() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHangul, setHangul] = useState(true);
  //   let [search, setSearch] = useState([]);
  //   const updateChange = (e) => {
  //     let data = e.target.value;
  //서버에서 받아온 데이터가 저장 되어있는 mydata 변수에 filter()를 돌려 데이터 안에 name속성을 소문자로 변환한다.
  //그리고 input의 입력값이 저장된 data변수를 소문자로 변환시켜 includes()를 활용해 같은 문자열이 포함된다면 filterData에 저장
  // let filterData = mydata.filter((i) =>
  //   i.name.toLowerCase().includes(data.toLowerCase())
  // );
  //     if (data.length === 0) {
  //       filterData = [];
  //     }
  //     setSearch(filterData);
  //   };

  useEffect(() => {
    if (!inputRef.current) return;
    inputWrapper = new HangulImeInputWrapper(inputRef.current);
  }, []);

  return (
    <div style={{ width: 1400 }} className="App">
      <div>
        <input
          placeholder="검색어를 입력하세요."
          ref={inputRef}
          type="text"
          style={{
            fontSize: "4rem",
            padding: "20px",
            marginBottom: 600,
            marginRight: 0,
            backgroundColor: "white",
            opacity: 0.9,
          }}
          onSelect={() => {
            inputWrapper?.checkChangedSelect();
          }}
          //   onChange={(e) => updateChange(e)}
        />

        <IconButton
          type="submit"
          sx={{ marginBottom: "20px" }}
          aria-label="search"
          onClick={() => navigate("/book/searchresult")}
        >
          <SearchIcon
            sx={{
              position: "absolute",
              width: 100,
              height: 100,
              marginRight: "120px",
            }}
          />
        </IconButton>
        {/* {search.map((item) => {
        return (
          <>
            <div className="search-result">
              <Link to={"/book/detail/" + item.id}>
                <p onClick={() => setSearch([])}>
                  {item.name} ({item.kor_name})
                </p>
              </Link>
            </div>
          </>
        );
      })} */}
      </div>
      <div style={{ backgroundColor: "#132154" }}>
        <div style={{ marginTop: 20, marginBottom: 20, marginBlock: 20 }}>
          <button
            onClick={() => {
              inputWrapper?.backspace();
            }}
          >
            ⌫
          </button>
          <button
            onClick={() => {
              setHangul(!isHangul);
            }}
          >
            🌐
          </button>
        </div>
        <div>
          <div style={{ display: isHangul ? "block" : "none" }}>
            <div>
              {"ㅃㅉㄸㄲㅆ".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div>
              {"ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div>
              {"ㅁㄴㅇㄹㅎㅗㅓㅏㅣ".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div>
              {"ㅋㅌㅊㅍㅠㅜㅡ".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <button
              style={{ paddingInline: 200 }}
              onClick={() => {
                inputWrapper?.insert(" ");
              }}
            >
              SPACE
            </button>
          </div>
          <div style={{ display: isHangul ? "none" : "block" }}>
            <div>
              {"~!@#$%^&*()-".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div>
              {"qwertyuiop".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div>
              {"asdfghjkl".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div>
              {"zxcvbnm".split("").map((val, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      inputWrapper?.insert(val);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <button
              style={{ paddingInline: 200 }}
              onClick={() => {
                inputWrapper?.insert(" ");
              }}
            >
              SPACE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
