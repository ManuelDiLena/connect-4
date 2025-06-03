import './menu.css';
import { useCpu } from '../../context/CpuContext';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../assets/main-logo.png';
import CPUICON from '../../assets/cpu-icon.png';
import PLAYERICON from '../../assets/player-icon.png';

const Menu = () => {
  const { setCpu } = useCpu();
  const navigate = useNavigate();

  const startGame = (isCpu) => {
    setCpu(isCpu);
    navigate('/game');
  };

  return (
    <div className='main__container btns__container'>
      <div className='main__content'>
        <img src={LOGO} className='main__logo' alt='logo' />
        <button className='main__btn btn__pink' onClick={() => startGame(true)}>
          PLAY vs CPU 
          <img src={CPUICON} className='btn__icon cpu-icon' alt='cpu icon' />
        </button>
        <button className='main__btn btn__yellow' onClick={() => startGame(false)}>
          PLAY vs PLAYER 
          <img src={PLAYERICON} className='btn__icon player-icon' alt='player icon' />
        </button>
        <button className='main__btn btn__light'onClick={() => navigate('/rules')}>
          GAME RULES
        </button>
      </div>
    </div>
  );
}

export default Menu;