import React, { useState, useContext } from "react";
import { userContext } from "../../context/userContect";
import { motion } from "framer-motion";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 327px;
  height: 172px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 -20px 30px 5px #242424 inset;
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 576px) {
    width: 220px;
    height: 146px;
  }
`;

const InnerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const Play = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 100%;

  img {
    position: relative;
    top: 13px;
  }

  @media (min-width: 576px) {
    height: 100px;
  }
`;

const Title = styled.h4`
  display: inline-block;
  height: 60px;
  width: 100%;
  color: white;
  font-weight: 400;
  margin: 0;
  text-align: center;
  letter-spacing: 4px;
  font-size: 16px;
  max-width: 300px;
  line-height: 100%;
  height: fit-content;

  @media (min-width: 576px) {
    max-width: 200px;
    height: 50px;
  }
`;

const HoverBg = styled.div`
  width: 327px;
  height: 200px;
  background-color: #0000009e;
  color: white;
  font-weight: 400;
  border-radius: 4px;

  @media (min-width: 576px) {
    width: 220px;
    height: 146px;
    margin: 0;
    padding: 0;
  }
`;

const PlayHover = styled.div`
  position: relative;
  top: 80px;
  left: 24px;
  width: 27px;
  height: 27px;
  border-radius: 50%;

  background-image: url(./assets/playHoverOff.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-image: url(./assets/itemPlayHover.svg);
  }

  @media (min-width: 576px) {
    top: 71px;
  }
`;

const TitleHover = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 39px;
  left: 65px;
  height: 55px;
  letter-spacing: 4px;
  font-size: 16px;
  max-width: 250px;
  line-height: 100%;

  @media (min-width: 576px) {
    top: 30px;
    max-width: 140px;
  }
`;

const itemList = {
  visible: { x: 0, transition: { duration: 0.7, type: "tween" } },
  hidden: { x: 500 },
};

export const UserMovie = (props) => {
  let { bg, title } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <ItemContainer
      as={motion.div}
      variants={itemList}
      whileTap={{ scale: 0.95 }}
      style={{ backgroundImage: `url(${bg})` }}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <InnerItems>
        {isHover ? (
          ""
        ) : (
          <div>
            <Play>
              {" "}
              <img src="./assets/play-item.svg" alt="movieimage" />
            </Play>
            <Title>{title}</Title>
          </div>
        )}
        {isHover ? (
          <HoverBg>
            <PlayHover />
            <TitleHover>{title}</TitleHover>
          </HoverBg>
        ) : (
          ""
        )}
      </InnerItems>
    </ItemContainer>
  );
};
