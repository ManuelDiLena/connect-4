import { Link } from 'react-router-dom';
import './game.css';
import LOGO from '../../assets/main-logo.png';
import PLAYER1 from '../../assets/player-1.png';
import PLAYER2 from '../../assets/player-2.png';
import BLACKBOARD from '../../assets/board-black.svg';
import WHITEBOARD from '../../assets/board-white.svg';
import { usePlay } from './usePlay';
import Grid from '../grid/Grid';
import Timer from '../timer/Timer';
import Winner from '../winner/Winner';
import Modal from '../modal/Modal';

const Game = () => {
  const width = window.innerWidth;
  const { grid, setNewDisk, player, timerCounter, setTimerCounter, winner, player1Wins, player2Wins, setWhoWins, playAgain, wait, winnerPos, pause, setPause } = usePlay();

  return (
    <div className='container game_container'>
      <div className='menu__container'>
        <button to='/' className='game__btn menu__btn' onClick={() => setPause(true)}>MENU</button>
        <img src={LOGO} alt='logo' className='main__logo' />
        <button className='game__btn restart__btn' onClick={() => playAgain(true)}>RESTART</button>
      </div>
      <div className='game__container'>
        <article className='player__card player-1-card'>
          <img src={PLAYER1} alt='player1' />
          <h2>PLAYER 1</h2>
          <p>{player1Wins}</p>
        </article>
        <div className='game__board'>
          <div className='white-board' style={{ backgroundImage: `url(${WHITEBOARD})` }}></div>
          <div className='black-board' style={{ backgroundImage: `url(${BLACKBOARD})` }}></div>
          <Grid 
            grid={grid}
            setNewDisk={setNewDisk}
            winner={winner}
            wait={wait}
            player={player}
            winnerPos={winnerPos}
            width={width}
          />
        </div>
        <article className='player__card player-2-card'>
          <img src={PLAYER2} alt='player2' />
          <h2>PLAYER 2</h2>
          <p>{player2Wins}</p>
        </article>
        {!winner && (
          <Timer 
            timerCounter={timerCounter}
            player={player}
            setTimerCounter={setTimerCounter}
            setWins={setWhoWins}
            pause={pause}
          />
        )}
        {winner && !wait && (
          <Winner
            winner={winner}
            playAgain={playAgain}
          />
        )}
      </div>
      <div 
        className={(winner === 1) 
          ? 'winner-color winner-pink' 
          : ((winner === 2) ? 'winner-color winner-yellow' 
          : 'winner-color')}
      ></div>
      {pause && (
        <Modal setPause={setPause}>
          <div className='modal__content'>
            <p>PAUSE</p>
            <button className='modal__btn white-btn' onClick={() => {setPause(false)}}>
              CONTINUE GAME
            </button>
            <button className='modal__btn yellow-btn' onClick={() => {setPause(false); playAgain(true);}}>
              RESTART
            </button>
            <Link to='/' className='modal__btn pink-btn'>
              QUIT GAME
            </Link>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Game;