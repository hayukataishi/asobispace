import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const cards = [
  // カードのデータをここに追加します。
  { title: 'Card 1', description: 'This is card 1', imageUrl: 'url_to_image', linkUrl: 'url_to_link' },
  { title: 'Card 2', description: 'This is card 1', imageUrl: 'url_to_image', linkUrl: 'url_to_link' },
  { title: 'Card 3', description: 'This is card 1', imageUrl: 'url_to_image', linkUrl: 'url_to_link' },
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

const App = () => (
  <Router>
    <div className="app">
      <h1>はゆかたいしの遊び場</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 他のルートをここに追加します */}
      </Routes>
    </div>
  </Router>
);

export default App;
