import React, { useState } from "react";
import styled from "styled-components";
import Topbutton from "./Topbutton";

const Inputstyle = styled.input`
  border-radius: 5px;
  height: 30px;
  margin-right: 20px;
`;

const SecondButton = styled.button`
  background-color: #a3f4e0;
  color: #28997b;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  font-weight: bold;
  border: none;
`;

function Input() {
  const [money, setMoney] = useState(0);
  const [name, setName] = useState("");

  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const onChangePoints = (e) => {
    const { value } = e.target;
    let str = value.replaceAll(",", "");
    setMoney(str);
  };

  return (
    <div>
      <h1>Input</h1>
      <div>
        이름
        <Inputstyle value={name} onChange={(e) => setName(e.target.value)} />
        가격
        <Inputstyle
          type="text"
          onChange={(e) => onChangePoints(e)}
          value={addComma(money) || ""}
        />
        <SecondButton
          onClick={() => alert(`{name: ${name}, price: ${money} }`)}
        >
          저장
        </SecondButton>
      </div>
    </div>
  );
}

export default Input;

// https://anerim.tistory.com/243
