import { Link } from 'react-router-dom';
import './menu.css';
import LOGO from '../../assets/main-logo.png';
import CPUICON from '../../assets/cpu-icon.png';
import PLAYERICON from '../../assets/player-icon.png';

const Menu = () => {
  return (
    <div className='main__container btns__container'>
      <div className='main__content'>
        <img src={LOGO} className='main__logo' alt='logo' />
        <Link to={'/game'} className='main__btn btn__pink'>
          PLAY vs CPU 
          <img src={CPUICON} className='btn__icon cpu-icon' alt='cpu icon' />
        </Link>
        <Link to={'/game'} className='main__btn btn__yellow'>
          PLAY vs PLAYER 
          <img src={PLAYERICON} className='btn__icon player-icon' alt='player icon' />
        </Link>
        <Link to={'/rules'} className='main__btn btn__light'>
          GAME RULES
        </Link>
      </div>
    </div>
  );
}

export default Menu;