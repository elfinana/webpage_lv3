import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  border: 3px solid #d6d7d4;
  padding-bottom: 30px;
`;
const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  border: 2px solid #d6d7d4;
  cursor: pointer;
  &::before {
    content: "▼";
    position: absolute;
    top: 5px;
    right: 20px;
    color: black;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 130px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: white;
  color: black;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #d6d7d4;
  }
`;

function Selectbox() {
  const [currentValue, setCurrentValue] = useState("자바");
  const [isShowOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <div>
      <Container>
        <h1>Select</h1>
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
          <Label>{currentValue}</Label>

          <SelectOptions show={isShowOptions}>
            <Option onClick={handleOnChangeSelectValue}>리액트</Option>
            <Option onClick={handleOnChangeSelectValue}>자바</Option>
            <Option onClick={handleOnChangeSelectValue}>스프링</Option>
            <Option onClick={handleOnChangeSelectValue}>리액트네이티브</Option>
          </SelectOptions>
        </SelectBox>
      </Container>
    </div>
  );
}

export default Selectbox;
