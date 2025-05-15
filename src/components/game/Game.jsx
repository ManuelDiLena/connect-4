import { Link } from 'react-router-dom';
import './game.css';
import LOGO from '../../assets/main-logo.png';
import PLAYER1 from '../../assets/player-1.png';
import PLAYER2 from '../../assets/player-2.png';
import BlackBoard from '../../assets/board-black.svg?react';
import WhiteBoard from '../../assets/board-white.svg?react';

const Game = () => {
  return (
    <div className='container game__container'>
      <div className='menu__container'>
        <Link className='game__btn menu_btn'>MENU</Link>
        <img src={LOGO} alt='logo' className='main__logo' />
        <button className='game__btn restart__btn'>RESTART</button>
      </div>
      <div className='game'>
        <article className='player__card player-1-card'>
          <img src={PLAYER1} alt='player1' />
          <h2>PLAYER 1</h2>
          <p>0</p>
        </article>
        <div className='game__board'>
          <WhiteBoard className='white-board' />
          <BlackBoard className='black-board' />
        </div>
        <article className='player__card player-2-card'>
          <img src={PLAYER2} alt='player2' />
          <h2>PLAYER 2</h2>
          <p>0</p>
        </article>
      </div>
      <div className='winner__color'></div>
    </div>
  );
}

export default Game;