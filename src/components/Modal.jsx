import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

// 모달 1 디자인

const Btn1 = styled.button`
  width: 150px;
  height: 40px;
  background-color: #9facdd;
  border-radius: 10px;
  border-style: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    border: 1.5px solid gray;
  }
  margin-bottom: 10px;
`;

const BcDiv = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const StDiv = styled.div`
  width: 300px;
  height: 200px;
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #9facdd;
  border: 1px solid black;
  border-radius: 8px;
`;

const Stbtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Stbtn2 = styled.button`
  position: absolute;
  right: 40px;
  top: 10px;
`;

// 모달 2 디자인

const Btn2 = styled.button`
  width: 150px;
  height: 40px;
  background-color: #dbdfaa;
  border-radius: 10px;
  border-style: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    border: 1.5px solid gray;
  }
`;

const BcDiv2 = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen2 ? "block" : "none")};
`;

const StDiv2 = styled.div`
  width: 300px;
  height: 200px;
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dbdfaa;
  border: 1px solid black;
  border-radius: 8px;
`;

const Stbtn22 = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

// modal

function Modal() {
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  const modalHandler2 = (e) => {
    setIsOpen2(!isOpen2);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Modal</h1>
      <div>
        <BcDiv isOpen={isOpen}>
          <StDiv>
            <p>x를 클릭하면 닫힙니다.</p>
            <Stbtn onClick={modalHandler}>x</Stbtn>
            <Stbtn2>확인</Stbtn2>
          </StDiv>
        </BcDiv>
        <Btn1 onClick={modalHandler}>open modal1</Btn1>
      </div>
      <div>
        <BcDiv2 isOpen2={isOpen2} onClick={modalHandler2}>
          <StDiv2 onClick={(e) => e.stopPropagation()}>
            <p>overlay나 x 를 클릭하면 닫힙니다.</p>
            <Stbtn22 onClick={modalHandler2}>x</Stbtn22>
          </StDiv2>
        </BcDiv2>
        <Btn2 onClick={modalHandler2}>open modal2</Btn2>
      </div>
    </div>
  );
}

export default Modal;
