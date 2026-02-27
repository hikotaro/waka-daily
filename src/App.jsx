import { useState } from 'react';
import './App.css';
import { Waka } from './components/Waka';
import { wakaData } from './data/wakaData';

const getRandomWaka = (currentId) => {
  const filtered = wakaData.filter((w) => w.id !== currentId);
  return filtered[Math.floor(Math.random() * filtered.length)];
};

function App() {
  const [waka] = useState(getRandomWaka);

  return (
    <div>
      <Waka waka={waka} />
    </div>
  );
}

export default App;
