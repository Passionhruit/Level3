import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const StInput = styled.input`
  width: 200px;
  height: 35px;
  border: 2px solid white;
  border-radius: 10px;
  margin-right: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  padding-left: 10px;
  padding-right: 10px;
  &::placeholder {
    background-color: white;
    border-radius: 10px;
    font-size: 17px;
  }
`;

const StBtn = styled.button`
  font-size: 16px;
  margin: 0 auto;
  margin-top: 25px;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  color: white;
  background: #b799ff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    border: 1px solid white;
  }
`;

function Input() {
  // Input
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);

  const productChangeHandler = (e) => {
    setProduct(e.target.value);
  };

  const priceChangeHandler = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    const numValue = value.replaceAll(",", "");
    value = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setPrice(value);
  };

  const showItsInfo = (e) => {
    alert(`{product: ${product}, price:${price.replaceAll(",", "")}}`);
    setProduct("");
    setPrice("");
    e.preventDefault();
  };

  return (
    <form>
      <h1>Input</h1>
      product{" "}
      <StInput type="text" value={product} onChange={productChangeHandler} />
      price <StInput type="text" value={price} onChange={priceChangeHandler} />
      <StBtn onClick={showItsInfo}>Save</StBtn>
    </form>
  );
}

export default Input;
