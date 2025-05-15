import LOGO from './assets/main-logo.png';
import CPUICON from './assets/cpu-icon.png';
import PLAYERICON from './assets/player-icon.png';

function App() {
  return (
    <div className='main__container buttons__container'>
      <img src={LOGO} className='main__logo' alt='logo' />
      <button className='main__button button__pink'>
        PLAY vs CPU
        <img src={CPUICON} className='button__icon cpu-icon' alt='cpu icon' />
      </button>
      <button className='main__button button__yellow'>
        PLAY vs PLAYER 
        <img src={PLAYERICON} className='button__icon player-icon' alt='player icon' />
      </button>
      <button className='main__button button__light'>
        GAME RULES
      </button>
    </div>
  )
}

export default App
