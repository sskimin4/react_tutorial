import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("초기상태");
  return (
    <>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("변경상태");
        }}
      >
        변경
      </button>
      <button
        onClick={() => {
          setMessage("초기상태");
        }}
      >
        초기
      </button>
    </>
  );
};
export default Say;
