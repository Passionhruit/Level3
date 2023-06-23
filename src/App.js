import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Dropdown from "./components/Dropdown";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Button />
      <Input />
      <Modal />
      <Dropdown />
    </>
  );
}

export default App;
