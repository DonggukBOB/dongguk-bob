import React from "react";
import imgMain from "../../assets/imgMain.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #f29300;
  border: none;
  font-size: 1.5em;
  margin: 3%;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Title = styled.h1`
  letter-spacing: 10px;
  font-size: 2.5em;
`;

const SubTitle = styled.h3`
  font-size: 1em;
`;

export default function MainPage() {
  return (
    <Container>
      <SubTitle>지친 당신의 허기를 달래줄</SubTitle>
      <SubTitle>든-든한</SubTitle>
      <Title>동국밥</Title>
      <Image src={imgMain} />
      <Link to="/recommend">
        <Button>메뉴 추천</Button>
      </Link>
      <Link to="/list">
        <Button>맛집 목록</Button>
      </Link>
    </Container>
  );
}
