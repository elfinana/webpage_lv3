import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const FirstButton = styled.button`
  background-color: white;
  width: 180px;
  height: 50px;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  border: 3px solid ${(props) => props.borderColor};
  font-weight: bold;
  border-radius: 8px;
`;

export const SecondButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 8px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 10px;
  font-weight: bold;
  border: none;
  &:active {
    background-color: #c7c7c7;
  }
`;

function Topbutton() {
  return (
    <div>
      <h1>Button</h1>
      <Container>
        <FirstButton
          borderColor="#a3f4e0"
          onClick={() => alert("버튼을 만들어보세요")}
        >
          Large Primary Button
          <BiChevronRight />
        </FirstButton>

        <SecondButton
          backgroundColor="#a3f4e0"
          color="#28997b"
          width="100px"
          height="40px"
        >
          Medium
        </SecondButton>

        <SecondButton
          backgroundColor="#a3f4e0"
          color="#28997b"
          width="85px"
          height="35px"
        >
          Small
        </SecondButton>
      </Container>

      <Container>
        <FirstButton
          borderColor="#f2bcaa"
          color="#e8754e"
          onClick={() => window.prompt("어렵나요?", "")}
        >
          Large Primary Button
          <VscBellDot color="black" />
        </FirstButton>

        <SecondButton
          backgroundColor="#f2bcaa"
          color="#e8754e"
          width="100px"
          height="40px"
        >
          Medium
        </SecondButton>

        <SecondButton
          backgroundColor="#f2bcaa"
          color="#e8754e"
          width="85px"
          height="35px"
        >
          Small
        </SecondButton>
      </Container>
    </div>
  );
}

export default Topbutton;
