import React from "react";
import imgMain from "./imgMain.jpg";

export default function MainPage() {
  return (
    <div>
      <h3>지친 당신의 허기를 달래줄 든-든한</h3>
      <h1>동국밥</h1>
      <img src={imgMain} width="450" height="450" />
      <button onClick={() => alert("recommend로 이동")}>메뉴 추천</button>
      <button onClick={() => alert("list로 이동")}>맛집 목록</button>
    </div>
  );
}
