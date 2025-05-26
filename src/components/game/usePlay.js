import { useState, useEffect } from 'react';

let col;
let row;
let canChange = false;

const usePlay = () => {
  const initialGrid = [ [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0] ];
  const [grid, setGrid] = useState(initialGrid);
  const [player, setPlayer] = useState(1);
  const [timerCounter, setTimerCounter] = useState(30);
  const [winner, setWinner] = useState(null);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    setWait(true)
    const timer = setTimeout(() => {
      setWait(false)
      checkWin()
      canChange && changePlayer()
    }, 600)
    return () => clearTimeout(timer)
  }, [grid])

  const changePlayer = () => {
    (player === 1) ? setPlayer(2) : setPlayer(1)
    setTimerCounter(30)
  }

  const updateGrid = () => {
    if (row != null && col != null) {
      grid[row][col] = player
      setGrid([...grid])
      canChange = true
    }
  }

  const setNewDisk = (column) => {
    col = null
    row = null
    for (let index in grid) {
      if (grid[index][column] === 0) {
        col = column
        row = index
      } else {
        break
      }
    }
    updateGrid()
  }

  const addWinner = (playerNum) => {
    if (playerNum === 1) {
      setPlayer1Wins(player1Wins + 1)
    } else if (playerNum === 2) {
      setPlayer2Wins(player2Wins + 1)
    }
  }

  const setWhoWins = (playerNum) => {
    setWinner(playerNum)
    addWinner(playerNum)
    setTimerCounter(0)
    canChange = false
  }

  const playAgain = (restart) => {
    if (restart) {
      (player === 2) ? changePlayer() : setTimerCounter(30)
      setPlayer1Wins(0)
      setPlayer2Wins(0)
    } else {
      changePlayer()
    }
    canChange = false
    setWinner(null)
    setGrid(initialGrid)
  }

  const checkWin = () => {
    row = Number(row)
    col = Number(col)
    // vertically
    row - 3 >= 0 && (grid[row - 1][col] === player) && (grid[row - 2][col] === player) && (grid[row - 3][col] === player) && setWhoWins(player)
    row + 3 <= 5 && (grid[row + 1][col] === player) && (grid[row + 2][col] === player) && (grid[row + 3][col] === player) && setWhoWins(player)
    // horizontally
    col - 3 >= 0 && (grid[row][col - 1] === player) && (grid[row][col - 2] === player) && (grid[row][col - 3] === player) && setWhoWins(player)
    col + 3 <= 6 && (grid[row][col + 1] === player) && (grid[row][col + 2] === player) && (grid[row][col + 3] === player) && setWhoWins(player)
    //Diagonally up
    row - 3 >= 0 && col - 3 >= 0 && (grid[row - 1][col - 1] === player) && (grid[row - 2][col - 2] === player) && (grid[row - 3][col - 3] === player) && setWhoWins(player)
    row - 3 >= 0 && col + 3 <= 6 && (grid[row - 1][col + 1] === player) && (grid[row - 2][col + 2] === player) && (grid[row - 3][col + 3] === player) && setWhoWins(player)
    //Diagonally down
    row + 3 <= 5 && col - 3 >= 0 && (grid[row + 1][col - 1] === player) && (grid[row + 2][col - 2] === player) && (grid[row + 3][col - 3] === player) && setWhoWins(player)
    row + 3 <= 5 && col + 3 <= 6 && (grid[row + 1][col + 1] === player) && (grid[row + 2][col + 2] === player) && (grid[row + 3][col + 3] === player) && setWhoWins(player)
  }

  return {
    grid,
    player,
    setNewDisk,
    timerCounter,
    setTimerCounter,
    winner,
    setWhoWins,
    player1Wins,
    player2Wins,
    playAgain,
    wait
  }
}

export { usePlay };