/** @format */

import React, { useState } from "react";
import "./Yushoku.css";

const Yushoku = () => {
  const [days, setDays] = useState(1);
  const [people, setPeople] = useState(1);
  const [budget, setBudget] = useState("1000");
  const [items, setItems] = useState(1);
  const [type, setType] = useState("");
  const [serverResponse, setServerResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // ここで入力データを処理します
    const apikey = process.env.REACT_APP_AZURE_KEY;
    console.log({ days, people, budget, items, type, apikey });

    const jsonbody = {
      "input_data": {
        "days": days,
        "people": people,
        "budget": budget,
        "items": items,
        "foodtype": type
      }
    }

    // Fetch APIを使用する場合
    var response = await fetch('https://asobispace.azurewebsites.net/api/yusyokuGPT?code=' + apikey, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonbody),
    })

    response = await response.text();
    console.log(response);

    setIsLoading(false);
    // ここでサーバーからの戻り値を模擬します
    setServerResponse(response);
  };

  return (
    <div className="app-container">
      <h1>夕食の達人</h1>
      <form onSubmit={handleSubmit}>
        <label>
          期間(日数):
          <select value={days} onChange={(e) => setDays(e.target.value)}>
            {[...Array(9)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
        <label>
          一食あたりの量(人数):
          <select value={people} onChange={(e) => setPeople(e.target.value)}>
            {[...Array(9)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
        <label>
          一食あたりの予算(円):
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </label>
        <label>
          一食あたりの品数:
          <select value={items} onChange={(e) => setItems(e.target.value)}>
            {[...Array(3)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>
        <label>
          好きな料理のタイプ:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <button type="submit">作成</button>
        <textarea value={serverResponse} readOnly />
        {isLoading && <div className="loader"></div>}
      </form>
    </div>
  );
};

export default Yushoku;
