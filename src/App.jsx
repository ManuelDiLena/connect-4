import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/menu/Menu';
import Game from './components/game/Game';
import Rules from './components/rules/Rules';

function App() {
  const [cpu, setCpu] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu setCpu={setCpu} />} />
          <Route path='/game' element={<Game cpu={cpu} />} />
          <Route path='/rules' element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
