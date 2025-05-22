import WINNER from '../../assets/winner.png';

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
          className='game__btn'
          onClick={() => playAgain(false)}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default Winner;