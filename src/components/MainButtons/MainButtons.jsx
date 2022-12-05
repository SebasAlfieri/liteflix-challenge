import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }

  @media (min-width: 1400px) {
    margin-bottom: 70px;
  }
`;

const PlayButton = styled.button`
  font-family: Bebas neue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #242424;
  height: 56px;
  width: 248px;
  font-size: 18px;
  letter-spacing: 4px;
  border: none;
  border: 1px solid #ffffff00;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff7f;
    background-color: #24242468;
  }
  

  img {
    margin-right: 10px;
  }
`;

const ListButton = styled.button`
  font-family: Bebas neue;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #242424;
  height: 56px;
  width: 248px;
  font-size: 18px;
  letter-spacing: 4px;
  border: 1px solid #ffffff7f;
  cursor: pointer;
  

  &:hover {
    background-color: #64eebc;
    color: #242424;
    transition: 0.5s ease;
  }

  &:after{
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  background: #64eebc;
  transition: all 0.3s ease;
  transition: 0.3s ease;
  }

  &:hover:after{
  left: 0;
  width: 100%;
  }

  &:hover > img{
    filter: invert(1);
  }

  img {
    margin-right: 10px;
  }

  @media (min-width: 576px) {
    background-color: #24242468;
  }
`;

export const MainButtons = () => {
  return (
    <ButtonsContainer>
      <PlayButton
        as={motion.button}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, type: "tween" }}
      >
        <img src="./assets/mainPlay.svg" alt="add icon" />
        REPRODUCIR
      </PlayButton>
      <ListButton
        as={motion.button}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.7, type: "tween" }}
      >
        <img src="./assets/mainPlus.svg" alt="add icon" />
        MI LISTA
      </ListButton>
    </ButtonsContainer>
  );
};
