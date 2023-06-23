import React from "react";
import { styled } from "styled-components";

const PriBtn = styled.button`
  width: 200px;
  height: 40px;
  background-color: #3aa6b9;
  border-style: none;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    border: 1px solid white;
  }
`;

const NegBtn = styled.button`
  margin-top: 10px;
  width: 200px;
  height: 40px;
  background-color: #ffd0d0;
  border-style: none;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;

function Button() {
  const btnList = ["Large Primary Button💎", "medium", "small"];
  const btnList2 = ["Large Negative Button🎈", "medium", "small"];
  return (
    <div>
      {" "}
      <h1>Button</h1>
      <div>
        {btnList.map((box) => {
          return (
            <PriBtn
              onClick={() => {
                alert(`${box} 버튼입니다.`);
              }}
            >
              {box}
            </PriBtn>
          );
        })}
      </div>
      <div>
        {" "}
        {btnList2.map((box) => {
          return (
            <NegBtn
              onClick={() => {
                prompt(`${box} 버튼일까요?`);
              }}
            >
              {box}
            </NegBtn>
          );
        })}
      </div>
    </div>
  );
}

export default Button;
