import React from "react";
import styled from "styled-components";

const Modalstyle = styled.div`
  width: 400px;
  height: 200px;
  position: fixed;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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

const SecondButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 8px;
  width: 85px;
  height: 35px;
  margin-right: 10px;
  font-weight: bold;
  border: none;
`;

const Buttonbox = styled.div`
  display: flex;
  gap: 5px;
`;

function Mintmodal({ setModalOpen }: ProsType) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <ModalBackdrop>
        <Modalstyle>
          <div>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </div>
          <Buttonbox>
            <SecondButton
              backgroundColor="#f2bcaa"
              color="#e8754e"
              onClick={closeModal}
            >
              닫기
            </SecondButton>
            <SecondButton backgroundColor="#a3f4e0" color="#28997b">
              확인
            </SecondButton>
          </Buttonbox>
        </Modalstyle>
      </ModalBackdrop>
    </div>
  );
}

export default Mintmodal;
