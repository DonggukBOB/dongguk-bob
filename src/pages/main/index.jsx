import React from "react";
import imgMain from "./imgMain.jpg";
import styled from "styled-components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background-color: #f29300;
  border: none;
  font-size: 25px;
  margin: 10px;
  color: #fff;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  letter-spacing: 10px;
  font-size: 40pt;
`;

const SubTitle = styled.h3`
  text-align: center;
  margin-top: 30px;
`;

const SubSubTitle = styled.h3`
  text-align: center;
`;

export default function MainPage() {
  return (
    <>
      <Header />
      <Container>
        <SubTitle>지친 당신의 허기를 달래줄</SubTitle>
        <SubSubTitle>든-든한</SubSubTitle>
        <Title>동국밥</Title>
        <Image src={imgMain} />
        <Link to="../recommend/index.jsx">
          <Button>메뉴 추천</Button>
        </Link>
        <Link to="../list/index.jsx">
          <Button>맛집 목록</Button>
        </Link>
      </Container>
    </>
  );
}
