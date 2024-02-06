import WINNER from '../../assets/winner.svg';

const Winner = ({ winner, playAgain }) => {
  return (
    <div className='winner__container'>
      <div 
        className='winner'
        style={{ backgroundImage: `url(${WINNER})` }}
      >
        <h3>{(winner === 1) ? `PLAYER 1` : `PLAYER 2`}</h3>
        <p>WINS</p>
        <button 
          className='game__button'
          onClick={() => playAgain(false)}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export { Winner };