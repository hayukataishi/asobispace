/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Yushoku from "./pages/Yushoku";
import ChatGPTImg from "./images/ChatGPT.jpg";
import YushokuImg from "./images/Yusyoku.png";
import AIKatsuyouImg from "./images/AIKatsuyou.png";

const cards = [
  // カードのデータをここに追加します。

  {
    title: "ChatGPT",
    description: "AIと会話していろいろお願いしてみよう。",
    imageUrl: ChatGPTImg,
    linkUrl: "https://chat.openai.com/",
  },
  {
    title: "夕食の達人",
    description: "献立を一緒に考えてくれます",
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
    title: "Card 3",
    description: "This is card 1",
    imageUrl: "url_to_image",
    linkUrl: "url_to_link",
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
        <h1>はゆかたいしの遊び場</h1>
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
