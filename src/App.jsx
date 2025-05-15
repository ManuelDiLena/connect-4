import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/menu/Menu';
import Game from './components/game/Game';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
