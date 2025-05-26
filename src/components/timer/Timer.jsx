import { useEffect } from 'react';
import TIMER1 from '../../assets/timer-1.png';
import TIMER2 from '../../assets/timer-2.png';
import './timer.css';

const Timer = ({ player, timerCounter, setTimerCounter, setWins, pause }) => {
  useEffect(() => {
    const timer = !pause && timerCounter > 0 && setInterval(() => setTimerCounter(timerCounter - 1), 1000);
    timerCounter === 0 && player === 1 && setWins(2, false)
    timerCounter === 0 && player === 2 && setWins(1, false)
    return () => clearInterval(timer)
  }, [timerCounter, pause])

  return (
    <div
      className={(player === 1)
        ? 'timer__container'
        : 'timer__container timer-2'
      }
    >
      <div
        className='timer'
        style={(player === 1)
          ? { backgroundImage: `url(${TIMER1})` }
          : { backgroundImage: `url(${TIMER2})` }
        }
      >
        <h3>
          {
            (player === 1)
            ? `PLAYER 1'S TURN`
            : `PLAYER 2'S TURN`
          }
        </h3>
        <p>{`${timerCounter}s`}</p>
      </div>
    </div>
  )
}

export default Timer;
