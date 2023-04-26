import React, { useState } from "react";
import styled from "styled-components";

// import Modal from "./Pinkmodal";
import Pinkmodal from "./Pinkmodal";
import Mintmodal from "./Mintmodal";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Mintbutton = styled.button`
  background-color: #a3f4e0;
  color: #28997b;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  font-weight: bold;
  border: none;
`;

const PinkButton = styled.button`
  background-color: white;
  width: 180px;
  height: 50px;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  color: #e8754e;
  border: 3px solid #f2bcaa;
  font-weight: bold;
  border-radius: 8px;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Openmodal() {
  //핑크색모달오픈
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //민트색모달오픈
  const [modalOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <h1>Modal</h1>
      <Container>
        <Mintbutton onClick={showModal}>open modal</Mintbutton>
        {modalOpen && <Mintmodal setModalOpen={setModalOpen} />}

        <PinkButton onClick={openModal}>open modal</PinkButton>
        <Pinkmodal isOpen={isModalOpen} closeModal={closeModal} />
      </Container>
    </div>
  );
}

export default Openmodal;
