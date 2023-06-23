import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Dropdown from "./components/Dropdown";
import GlobalStyle from "./GlobalStyle";

function App() {
  // Input
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // Select
  const [selected, setSelected] = useState("Choose One");

  return (
    <>
      <GlobalStyle />
      <Button />
      <Input
        product={product}
        setProduct={setProduct}
        price={price}
        setPrice={setPrice}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isOpen2={isOpen2}
        setIsOpen2={setIsOpen2}
      />
      <Dropdown selected={selected} setSelected={setSelected} />
    </>
  );
}

export default App;
