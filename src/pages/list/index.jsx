import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import places from "../../data/places";

const Contents = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Filter = styled.div`
  white-space: nowrap;
  overflow-x: auto;
  padding: 0 15px 10px;
  border-bottom: 1px solid #dbdbdb;
`;

const Button = styled.button`
  display: inline-block;
  margin: 10px 8px 0 8px;
  padding: 0 20px;
  font-size: 0.875rem;
  line-height: 32px;
  color: #6a6a6a;
  letter-spacing: -0.1em;
  border: 1px solid #cbcbcb;
  border-radius: 50px;
  background-color: #fff;
`;

const ListItme = styled.li`
  padding: 18px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
`;

const Thumb = styled.div`
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  padding-top: 42.85714%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: rgba(255, 255, 255, 0);
  text-indent: -9999px;
  border: none;
  vertical-align: top;
`;

const Info = styled.div`
  padding: 12px 7px 16px 0px;
  position: relative;
  text-decoration: none;
  vertical-align: middle;
`;

const Title = styled.span`
  font-size: 1.2em;
`;

const Score = styled.span`
  color: #ff792a;
  position: static;
  font-size: 1.3em;
  margin-left: 8px;
`;

const Address = styled.p`
  font-size: 0.75rem;
  margin-top: 8px;
  color: #9b9b9b;
  line-height: 1.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 10px;
`;

const Review = styled.p`
  margin-top: 10px;
  font-size: 0.875rem;
  line-height: 21px;
`;

export default function ListPage() {
  const listItems = places.map((post) => (
    <ListItme key={post.name}>
      <Thumb>
        <Image src={post.photo} />
      </Thumb>
      <Info>
        <Title>{post.name}</Title>
        <Score>{post.score}/5</Score>
        <Address>{post.address}</Address>
        <Review>{post.comment}</Review>
      </Info>
    </ListItme>
  ));

  return (
    <>
      <Header />
      <Contents>
        <Filter>
          <Button>위치</Button>
          <Button>가격</Button>
          <Button>종류</Button>
          <Button>종류</Button>
          <Button>종류</Button>
          <Button>종류</Button>
          <Button>종류</Button>
        </Filter>
        <ul>{listItems}</ul>
      </Contents>
    </>
  );
}
