import React from "react";
import { styled } from "styled-components";

const PriBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #3aa6b9;
  border-style: none;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const NegBtn = styled.button`
  margin-top: 10px;
  width: 150px;
  height: 40px;
  background-color: #ffd0d0;
  border-style: none;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

function Button() {
  const btnList = ["Large Primary Button", "medium", "small"];
  const btnList2 = ["Large Negative Button", "medium", "small"];
  return (
    <div>
      {" "}
      <h1>Button</h1>
      <div>
        {btnList.map((box) => {
          return <PriBtn>{box}</PriBtn>;
        })}
      </div>
      <div>
        {" "}
        {btnList2.map((box) => {
          return <NegBtn>{box}</NegBtn>;
        })}
      </div>
    </div>
  );
}

export default Button;
