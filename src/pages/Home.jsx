// Home.jsx
import React, { useState } from 'react';
import Box from '../components/Box';
import Sidebar from '../components/Sidebar';
import './styles/Home.css';

export default function Home() {
  const [items, setItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const postObj = { setState: setItems };

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Box setState={postObj} darkMode={darkMode} />
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
