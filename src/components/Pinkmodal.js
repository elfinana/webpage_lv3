import React from "react";
import styled from "styled-components";

const Modalstyle = styled.div`
  width: 250px;
  height: 200px;
  position: fixed;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  padding: 30px;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.8);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Xbutton = styled.button`
  border-radius: 20px;
  width: 35px;
  height: 35px;
  float: right;
`;

function Pinkmodal({ isOpen, closeModal }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      {/* 모달창 바깥쪽은 누르면 클로즈됨 */}

      <ModalBackdrop onClick={closeModal}>
        <Modalstyle onClick={(e) => e.stopPropagation()}>
          닫기 버튼 1개가 있고,
          <br />
          외부 영역을 누르면 모달이 닫혀요.
          <Xbutton onClick={closeModal}>X</Xbutton>
        </Modalstyle>
      </ModalBackdrop>
    </div>
  );
}

export default Pinkmodal;
