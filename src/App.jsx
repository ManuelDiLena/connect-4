import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/menu/Menu';
import Game from './components/game/Game';
import Rules from './components/rules/Rules';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/game' element={<Game />} />
          <Route path='/rules' element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
