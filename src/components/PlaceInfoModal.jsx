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

const Modal = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 80%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
`;

const PlaceInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 85%;
  height: 95%;
  overflow-y: scroll;
`;

const ExitButton = styled.i`
  float: right;
`;

const Title = styled.h1`
  display: inline;
  margin-right: 10px;
  white-space: nowrap;
`;

const Score = styled.span`
  font-size: 1.25rem;
  color: #ff792a;
  white-space: nowrap;
`;

const FoodImg = styled.img`
  margin: 10px 0;
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 0 15px 20px;
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

const InfoContainer = styled.div`
  margin: 10px 0;
  padding: 0 15px 10px;
  border-bottom: 1px solid #9b9b9b;
`;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  color: #9b9b9b;
`;

const Spacer = styled.div`
  min-height: 5%;
`;

const RetryButton = styled.button`
  display: ${({ recommend }) => (recommend ? "block" : "none")};
  position: absolute;
  bottom: 2.5%;
  right: 5%;
  width: 100px;
  height: 100px;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #fbc402;
  border: none;
  border-radius: 50px;
  box-shadow: 5px 5px 5px 1px gray;

  &:active {
    transform: translateY(1px);
    box-shadow: 4px 4px 4px 1px gray;
  }
`;

const PreviousButton = styled.button`
  display: ${({ recommend }) => (recommend ? "block" : "none")};
  position: absolute;
  bottom: 5%;
  right: calc(5% + 110px);
  width: 50px;
  height: 50px;
  font-size: 1.025rem;
  font-weight: bold;
  background-color: #fbc402;
  border: none;
  border-radius: 50px;
  box-shadow: 5px 5px 5px 1px gray;

  &:active {
    transform: translateY(1px);
    box-shadow: 4px 4px 4px 1px gray;
  }
`;

export const openPlaceInfoModal = () => {
  $(".place-info-modal-container").show();
  $(".place-info-modal").animate({ height: "show" }, { duration: 200 });
};

export const closePlaceInfoModal = () => {
  $(".place-info-modal").animate({ height: "hide" }, { duration: 200 });
  setTimeout(() => $(".place-info-modal-container").hide(), 210);
};

export default function PlaceInfoModal({
  place,
  recommend,
  onRetry,
  onBackPlace,
}) {
  const closeModal = (event) => {
    event.stopPropagation();
    closePlaceInfoModal();
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const retryRecommend = (event) => {
    event.stopPropagation();
    $(".place-info-container").scrollTop(0);
    onRetry();
  };

  const backPlace = (event) => {
    event.stopPropagation();
    $(".place-info-container").scrollTop(0);
    onBackPlace();
  };

  return (
    <Container className="place-info-modal-container" onClick={closeModal}>
      <Modal className="place-info-modal" onClick={stopPropagation}>
        <PlaceInfoContainer className="place-info-container">
          <div>
            <ExitButton
              className="fa fa-times fa-2x"
              aria-hidden="true"
              onClick={closeModal}
            />
            <Title>{place.name}</Title>
            <Score>★ {place.score}/5</Score>
            <div className="gray">{place.address}</div>
          </div>
          <FoodImg src={place.photo} />
          <ButtonContainer>
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
          </ButtonContainer>
          <InfoContainer>
            <InfoTitle>메뉴</InfoTitle>
            <span>{place.menu}</span>
            <span className="float-right">∙∙∙ {place.price}원</span>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>한줄평</InfoTitle>
            <span>{place.comment}</span>
          </InfoContainer>
          <Spacer />
        </PlaceInfoContainer>
      </Modal>
      <PreviousButton recommend={recommend} onClick={backPlace}>
        이전
      </PreviousButton>
      <RetryButton recommend={recommend} onClick={retryRecommend}>
        다시 추천
      </RetryButton>
    </Container>
  );
}
