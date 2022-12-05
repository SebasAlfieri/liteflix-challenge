import React, { useContext } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile.ts";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { userContext } from "../../context/userContect";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 60px;
  width: 100%;
  background-color: transparent;
  width: 90%;
  z-index: 100;

  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 40px;
    padding-top: 20px;
    padding-right: 20px;
  }

  @media (min-width: 992px) {
    padding-right: 20px;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: fit-content;
`;

const MenuIcon = styled.img`
  z-index: 100;
  width: 27px;
  z-index: 110;
  cursor: pointer;
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  @media (min-width: 768px) {
    gap: 60px;
    width: fit-content;
    margin: 0;
    padding: 0%;
    right: unset;
    left: 100px;
    top: 30px;
    z-index: 40;
  }
`;

const HeaderTitle = styled.img`
  display: flex;
  width: 113px;
  justify-content: center;
  align-items: center;
`;

const HeaderButton = styled.div`
  color: white;
  letter-spacing: 4px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  p {
    display: flex;
    width: fit-content;
    white-space: nowrap;
  }

  &:before {
    content: "";
    position: absolute;
    left: start;
    width: 0px;
    height: 30px;
    background-color: #64eebc;
    transition: 0.2s;
    z-index: -5;
  }

  &:hover:before {
    width: 220px;
  }

  &:hover > p {
    color: #242424;
  }

  &:hover > img {
    filter: invert(1);
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: transparent;

  &:before {
    content: "";
    position: absolute;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 0px solid #64eebc;
    transition: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:before {
    border: 8px solid #64eebc;
  }
`;

const User = styled.img`
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
`;

const Bell = styled.img`
  cursor: pointer;
`;

export const Navbar = () => {
  const context = useContext(userContext);
  const { menuClicked, ExitNav, toggle, setDropdownDesktop, openDrop } =
    context;
  const isMobile = useIsMobile();

  console.log(isMobile);

  return (
    <Container>
      {isMobile ? (
        <>
          {menuClicked ? (
            <MenuIconContainer onClick={toggle}>
              <MenuIcon
                style={{ width: "15px" }}
                src="./assets/cerrar.svg"
                as={motion.img}
                whileHover={{
                  scale: 1.2,
                  transition: { delay: 0, duration: 0.2 },
                }}
                onClick={ExitNav}
              />
            </MenuIconContainer>
          ) : (
            <MenuIconContainer onClick={toggle}>
              <MenuIcon
                src="./assets/menu.svg"
                as={motion.img}
                initial={{ y: -100 }}
                animate={{ y: 0, transition: { duration: 1, delay: 3.4 } }}
                whileHover={{
                  scale: 1.2,
                  transition: { delay: 0, duration: 0.2 },
                }}
                onClick={ExitNav}
              />
            </MenuIconContainer>
          )}
        </>
      ) : (
        <MenuIconContainer
          as={motion.div}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          onClick={toggle}
        >
          <MenuIcon
            as={motion.img}
            initial={{ scaleX: -1 }}
            whileHover={{ scale: 1.2, scaleX: -1 }}
            style={{ zIndex: 60 }}
            src="./assets/menu.svg"
            onClick={ExitNav}
          />
        </MenuIconContainer>
      )}
      {isMobile ? null : (
        <Bell
          as={motion.img}
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 1, delay: 3.2 } }}
          whileHover={{ scale: 1.2, transition: { delay: 0, duration: 0.2 } }}
          src="./assets/bell.svg"
          alt="notifications"
          style={{ zIndex: "100" }}
        />
      )}
      <UserContainer>
        <User
          as={motion.img}
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 1, delay: 3.4 } }}
          whileHover={{ scale: 1.2, transition: { delay: 0, duration: 0.2 } }}
          src="./assets/user.svg"
        />
      </UserContainer>
      {menuClicked && <BurgerMenu />}
      <HeaderTitleContainer>
        <HeaderTitle
          as={motion.img}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 2, delay: 0 },
          }}
          src="./assets/title.svg"
        />
        {isMobile ? null : (
          <HeaderButton
            as={motion.div}
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 1, delay: 3 } }}
            onClick={(e) => openDrop()}
          >
            <img src="./assets/mainPlus.svg" alt="add button" />
            <p>AGREGAR PELÍCULA</p>
          </HeaderButton>
        )}
      </HeaderTitleContainer>
    </Container>
  );
};
