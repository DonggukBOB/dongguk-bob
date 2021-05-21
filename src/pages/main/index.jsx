import React from "react";
import imgMain from "../../assets/imgMain.jpg";
import styled from "styled-components";
import { useHistory } from "react-router";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrap = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #f29300;
  border: none;
  font-size: 1.2em;
  margin: 10px;
  color: white;
  white-space: nowrap;
  padding: 5%;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  letter-spacing: 10px;
  font-size: 2.5em;
`;

const SubTitle = styled.h3`
  font-size: 0.9em;
`;

export default function MainPage() {
  const history = useHistory();

  return (
    <Container>
      <SubTitle>지친 당신의 허기를 달래줄</SubTitle>
      <SubTitle>든-든한</SubTitle>
      <Title>동국밥</Title>
      <Image src={imgMain} />
      <ButtonWrap>
        <Button onClick={() => history.push("/recommend")}>메뉴 추천</Button>
        <Button onClick={() => history.push("/list")}>맛집 목록</Button>
      </ButtonWrap>
    </Container>
  );
}
