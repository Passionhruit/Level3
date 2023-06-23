import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 200px;
  border: 1px solid gray;
  overflow: hidden;
  background-color: white;
  overflow: hidden;
`;

// 넘치는 dropdown

const Parent1 = styled.div`
  margin-left: 0px;
`;

const StDrop = styled.div`
  position: absolute;
  margin-top: 80px;
  width: 300px;
  user-select: none;
`;

const StDropBtn = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: pink;
  box-shadow: 3px 3px 10px 6px rgba((0, 0, 0, 0.06));
  display: flex;
  cursor: pointer;
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
  z-index: 100;
`;

const StDropItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: blanchedalmond;
  }
`;

// 안 넘치는 dropdown

const Parent2 = styled.div`
  position: relative;
  margin-left: 400px;
`;

const StDrop2 = styled.div`
  position: absolute;
  margin-top: 80px;
  width: 300px;
  user-select: none;
`;

const StDropBtn2 = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #ed667c;
  box-shadow: 3px 3px 10px 6px rgba((0, 0, 0, 0.06));
  display: flex;
  cursor: pointer;
`;

const StDropContent2 = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 110%;
  left: 0;
  padding: 15px;
  background-color: aliceblue;
  box-shadow: 3px 3px 10px 6px rgba((0, 0, 0, 0.06));
  width: 90%;
  z-index: 100;
`;

const StDropItem2 = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: blanchedalmond;
  }
`;

function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [selected, setSelected] = useState("Choose One ☕️");
  const [selected2, setSelected2] = useState("Choose One 🍰");

  const options = ["Americano", "Latte", "Espresso", "Decaffeine"];
  const desserts = ["cake", "muffin", "bagel", "sandwich"];

  return (
    <div>
      <h1>Select</h1>
      <Container>
        <Parent1>
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
        </Parent1>
        <Parent2>
          <StDrop2>
            <StDropBtn2 onClick={() => setIsActive2(!isActive2)}>
              {selected2}
            </StDropBtn2>
            {isActive2 && (
              <StDropContent2>
                {desserts.map((dessert) => (
                  <StDropItem2
                    onClick={() => {
                      setSelected2(dessert);
                      setIsActive2(false);
                    }}
                  >
                    {dessert}
                  </StDropItem2>
                ))}
              </StDropContent2>
            )}
          </StDrop2>
        </Parent2>
      </Container>
    </div>
  );
}

export default Dropdown;
