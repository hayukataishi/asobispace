/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Yushoku from "./pages/Yushoku";
import ChatGPTImg from "./images/ChatGPT.jpg";
import YushokuImg from "./images/Yusyoku.png";
import AIKatsuyouImg from "./images/AIKatsuyou.png";
import IllustrationImg from "./images/Illustration.png";
import TwitchImg from "./images/Twitch.png";

const cards = [
  // カードのデータをここに追加します。
  {
    title: "ChatGPT",
    description: "AIと会話していろいろお願いしてみよう。",
    imageUrl: ChatGPTImg,
    linkUrl: "https://chat.openai.com/",
  },
  {
    title: "Twitch",
    description: "毎日かじりついてるゲームの配信サイト。3BRをすこれ",
    imageUrl: TwitchImg,
    linkUrl:
      "https://www.twitch.tv/directory/following",
  },
  {
    title: "夕食の達人",
    description: "献立を一緒に考えてくれます(自作ツール)",
    imageUrl: YushokuImg,
    linkUrl: "/yusyoku",
  },
  {
    title: "AI活用例",
    description: "今までしてきた活用例を残しています。ご参考ください",
    imageUrl: AIKatsuyouImg,
    linkUrl:
      "https://mercury-tree-34e.notion.site/AI-d5bca58ba64e43c0903f7365330ba621",
  },
  {
    title: "イラストギャラリー",
    description: "AIを使って描いたイラストを公開しています",
    imageUrl: IllustrationImg,
    linkUrl:
      "https://mercury-tree-34e.notion.site/d40b62d2801643b59ffe55979aaf0456?pvs=4",
  },
];

const Card = ({ card }) => (
  <div className="card">
    <img src={card.imageUrl} alt={card.title} />
    <h2>{card.title}</h2>
    <p>{card.description}</p>
    <Link to={card.linkUrl}>詳細を見る</Link>
  </div>
);

const Home = () => (
  <div className="container">
    {cards.map((card, index) => (
      <Card key={index} card={card} />
    ))}
  </div>
);

const App = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Router>
      <div className="app">
        <h1 className="title">はゆかたいしの遊び場</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yusyoku" element={<Yushoku />} />
          {/* 他のルートをここに追加します */}
        </Routes>
        <footer>
          <p>©️ {currentYear} SUPER ULTRA THUNDER Inc. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
