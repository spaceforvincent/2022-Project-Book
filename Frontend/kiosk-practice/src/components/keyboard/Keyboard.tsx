import { HangulImeInputWrapper } from "mole-virtual-keyboard";
import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

let inputWrapper: HangulImeInputWrapper | undefined = undefined;

export default function VirtualKeyboard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHangul, setHangul] = useState(true);

  useEffect(() => {
    if (!inputRef.current) return;
    inputWrapper = new HangulImeInputWrapper(inputRef.current);
  }, []);

  return (
    <div style={{ width: 1400 }} className="App">
      <div>
        <input
          ref={inputRef}
          type="text"
          style={{
            fontSize: "5rem",
            marginBottom: 600,
            backgroundColor: "white",
            opacity: 0.9,
          }}
          onSelect={() => {
            inputWrapper?.checkChangedSelect();
          }}
        />
      </div>
      <div style={{ backgroundColor: "#EEEEEE" }}>
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
