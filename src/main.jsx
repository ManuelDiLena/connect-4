import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Game from './components/game/Game';
import Rules from './components/rules/Rules';
import { CpuProvider } from './context/CpuContext';

const router = createHashRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/game",
    element: <Game />
  },
  {
    path: "/rules",
    element: <Rules />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CpuProvider>
      <RouterProvider router={router} />
    </CpuProvider>
  </StrictMode>
);
