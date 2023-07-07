/** @format */

import React, { useState } from "react";
import "./Yushoku.css";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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
    const apikey = process.env.REACT_APP_OPENAI_API_KEY;
    console.log({ days, people, budget, items, type, apikey });

    const prompt = `あなたは料理研究家です。
    以下の条件を元に夕食の献立を考えてください。
    
    # 条件
    期間: ${days}日分
    一食あたりの量: ${people}人前
    一食あたりの予算:${budget}円
    一食あたりの品数: ${items}
    好きな料理のタイプ: ${type} ##あくまで参考。必ずしも料理のアイデアに含まなくてもよい。
    
    # 出力形式
    # 一日ごとの料理
    {N}日目
    料理名: {料理名}
    材料: {食材名}×{個数} ##改行して表示
    作り方: {わかりやすくステップごとに出力}
    
    # 合計
    必要なお買い物リスト: {食材名}×{個数}={おおよその予算} ##改行して表示
    合計予算: {必要な材料のすべての合計値}`;

    const completion = await openai.createChatCompletion({
      model: "gpt-4-0613", // string;
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    setIsLoading(false);
    // ここでサーバーからの戻り値を模擬します
    setServerResponse(completion.data.choices[0].message.content);
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
