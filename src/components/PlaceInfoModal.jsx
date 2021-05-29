import React from "react";
import styled from "styled-components";
import $ from "jquery";

import naverMapImg from "../assets/map-naver.png";
import kakaoMapImg from "../assets/map-kakao.png";

const Container = styled.div`
  display: none;
  z-index: 9999;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 80%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
`;

const PlaceInfo = styled.article`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;
`;

const ExitButton = styled.i`
  float: right;
`;

const Title = styled.h1`
  display: inline;
  margin-right: 10px;
`;

const Score = styled.span`
  margin-left: 10px;
  font-size: 1.25rem;
  color: #ff792a;
`;

const FoodImg = styled.img`
  margin: 10px 0;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;

const ButtonBox = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 0 10px 20px;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #9b9b9b;
`;

const LinkContainer = styled.a`
  width: 74px;
`;

const ImgContainer = styled.div`
  margin: 10px auto;
  width: 48px;
  height: 48px;
`;

const MapImg = styled.img`
  width: 100%;
`;

const InfoBox = styled.div`
  margin: 10px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #9b9b9b;
`;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  color: #9b9b9b;
`;

export default function PlaceInfoModal({ place }) {
  const closeModal = (event) => {
    event.stopPropagation();
    $(".place-info-modal").hide();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <Container className="place-info-modal" onClick={closeModal}>
      <ModalContainer onClick={stopPropagation}>
        <PlaceInfo>
          <div>
            <ExitButton
              className="fa fa-times fa-2x"
              aria-hidden="true"
              onClick={closeModal}
            />
            <Title>{place.name}</Title>
            <span className="gray">{place.category}</span>
            <Score>★ {place.score}/5</Score>
            <div className="gray">{place.address}</div>
          </div>
          <FoodImg src={place.photo} />
          <ButtonBox>
            <LinkContainer href={place.naver} target="_blank" rel="noreferrer">
              <ImgContainer>
                <MapImg src={naverMapImg} />
              </ImgContainer>
              <div>네이버 지도</div>
            </LinkContainer>
            <LinkContainer href={place.kakao} target="_blank" rel="noreferrer">
              <ImgContainer>
                <MapImg src={kakaoMapImg} />
              </ImgContainer>
              <div>카카오 지도</div>
            </LinkContainer>
            <LinkContainer
              href={"tel:" + place.phone}
              target="_blank"
              rel="noreferrer"
            >
              <ImgContainer>
                <i className="fa fa-phone fa-3x" aria-hidden="true" />
              </ImgContainer>
              <div>전화</div>
            </LinkContainer>
          </ButtonBox>
          <InfoBox>
            <InfoTitle>메뉴</InfoTitle>
            <span>{place.menu}</span>
            <span className="float-right">∙∙∙ {place.price}원</span>
          </InfoBox>
          <InfoBox>
            <InfoTitle>한줄평</InfoTitle>
            <span>{place.comment}</span>
          </InfoBox>
        </PlaceInfo>
      </ModalContainer>
    </Container>
  );
}
