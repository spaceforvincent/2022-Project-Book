import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Borrow_booklist() {
  const [Books, setBooks] = useState([]);
  const [isbnNum, setIsbn] = useState() 
  const getBook = async () => {
    const json = await (
      await fetch(
        `http://i7d211.p.ssafy.io:8081/book/detail?ISBN=${isbnNum}`
      )
    ).json();
    setBooks(Books.concat(json));
    console.log(json)
  };


  const showBook = () => {
    console.log(Books);
  };

  return (
    <div>
      <Button
        style={{ fontSize:100, width: 500, height: 500 }}
        onClick={() => {
          setIsbn(9791197910821);
        }}
      >
        isbn값 바꾸기
      </Button> 
      <Button
        style={{ fontSize:100, width: 500, height: 500 }}
        onClick={() => {
          getBook();
          showBook();
        }}
      >
        리스트에 넣기
      </Button>
    </div>
  );
}
