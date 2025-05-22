import { Link } from 'react-router-dom';
import './game.css';
import LOGO from '../../assets/main-logo.png';
import PLAYER1 from '../../assets/player-1.png';
import PLAYER2 from '../../assets/player-2.png';
import BlackBoard from '../../assets/board-black.svg?react';
import WhiteBoard from '../../assets/board-white.svg?react';
import Grid from './Grid';
import { usePlay } from './game';
import Timer from './Timer';

const Game = () => {
  const { grid, column, row, player, play, timerCounter, setTimerCounter, updateGrid, changePlayer, setNewDisk } = usePlay();

  return (
    <div className='container game_container'>
      <div className='menu__container'>
        <Link className='game__btn menu__btn'>MENU</Link>
        <img src={LOGO} alt='logo' className='main__logo' />
        <button className='game__btn restart__btn'>RESTART</button>
      </div>
      <div className='game__container'>
        <article className='player__card player-1-card'>
          <img src={PLAYER1} alt='player1' />
          <h2>PLAYER 1</h2>
          <p>0</p>
        </article>
        <div className='game__board'>
          <WhiteBoard className='white-board' />
          <BlackBoard className='black-board' />
          <Grid 
            grid={grid}
            column={column}
            row={row}
            play={play}
            updateGrid={updateGrid}
            changePlayer={changePlayer}
            setNewDisk={setNewDisk}
          />
        </div>
        <article className='player__card player-2-card'>
          <img src={PLAYER2} alt='player2' />
          <h2>PLAYER 2</h2>
          <p>0</p>
        </article>
        <Timer 
          timerCounter={timerCounter}
          player={player}
          setTimerCounter={setTimerCounter}
        />
      </div>
      <div className='winner__color'></div>
    </div>
  );
}

export default Game;