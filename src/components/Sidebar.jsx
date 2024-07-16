// Sidebar.jsx
import React, { useState, useEffect } from "react";
import "./styles/Sidebar.css";
import Item from "./Item";
import { reset } from "../functions/Reset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faBrush, faVolumeXmark, faSun, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { clear } from "../functions/Clear";

export default function Sidebar({ darkMode, toggleDarkMode }) {
  const [items, setItems] = useState([]);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    } else {
      const defaultItems = [
        { id: 0, emoji: "💧", name: "물" },
        { id: 1, emoji: "🔥", name: "불" },
        { id: 2, emoji: "🌏", name: "땅" },
        { id: 3, emoji: "💨", name: "바람" }
      ];
      setItems(defaultItems);
      localStorage.setItem("items", JSON.stringify(defaultItems));
    }
  }, []);

  function addItem(id, emoji, name) {
    const newItems = [...items, { id, emoji, name }];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  }

  function changeMute() {
    setMute(!mute);
  }

  return (
    <>
      <div className={`sidebar w-1/4 shadow px-4 py-3 border-gray-200 overflow-y-scroll ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div className="items">
          {items.map((item, index) => (
            <Item key={index} index={index} emoji={item.emoji} name={item.name} />
          ))}
          <button onClick={() => addItem(items.length, "🍋", "레몬")}>레몬</button>
        </div>
      </div>
      <div className="bottom">
        <span onClick={() => reset({ setState: setItems })}>초기화</span>
        <ul className="right">
          <li onClick={toggleDarkMode}>
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </li>
          <li onClick={clear}>
            <FontAwesomeIcon icon={faBrush} />
          </li>
          <li onClick={() => changeMute()}>
            {mute ? (
              <FontAwesomeIcon icon={faVolumeXmark} />
            ) : (
              <FontAwesomeIcon icon={faVolumeHigh} />
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
