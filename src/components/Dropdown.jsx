import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  z-index: 1;
  width: 500px;
  height: 200px;
  border: 1px solid gray;
  overflow: hidden;
`;

const StDrop = styled.div`
  margin-top: 80px;
  width: 300px;
  user-select: none;
  position: relative;
`;

const StDropBtn = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: pink;
  box-shadow: 3px 3px 10px 6px rgba((0, 0, 0, 0.06));
  display: flex;
`;

const StDropContent = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 110%;
  left: 0;
  padding: 15px;
  background-color: aliceblue;
  box-shadow: 3px 3px 10px 6px rgba((0, 0, 0, 0.06));
  width: 90%;
`;

const StDropItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: blanchedalmond;
  }
`;

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Americano", "Latte", "Espresso", "Decaffeine"];

  return (
    <div>
      <h1>Select</h1>
      <Container>
        <StDrop>
          <StDropBtn onClick={() => setIsActive(!isActive)}>
            {selected}
          </StDropBtn>
          {isActive && (
            <StDropContent>
              {options.map((option) => (
                <StDropItem
                  onClick={() => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                >
                  {option}
                </StDropItem>
              ))}
            </StDropContent>
          )}
        </StDrop>
      </Container>
    </div>
  );
}

export default Dropdown;
