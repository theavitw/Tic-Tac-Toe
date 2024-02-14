import { useState } from 'react'
import './App.css'

export default function App() {
  const [arr,setarr] = useState(Array(9).fill(null))
  const [pointer,setpointer] = useState(true)
  const HandleClick = (index) =>{
    if(arr[index] || winner){
      return
    }
    const newSquares = arr.slice();
    newSquares[index] = pointer ? 'X' : 'O';
    setarr(newSquares);
    setpointer(!pointer);

  }
  const renderSquare = (index) =>{
    return(
      <div className="grid-item" onClick={() => HandleClick(index)}>
        {arr[index]}
      </div>
    )
  }
  const HandleReset = () =>
    {
      setarr(Array(9).fill(null))
      setpointer(!pointer)
    }
  const calWinner = (arr) =>
    {
      const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
      for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
          return arr[a];
        }
      }
      
    }
  const winner = calWinner(arr);
  const status = winner
    ? `Winner: ${winner}`
    : arr.every((arr) => arr)
    ? 'Draw!'
    : `Next player: ${pointer ? 'X' : 'O'}`;
                                    
  return (
    <main>
      <div>
        <h1>{status}</h1>
      </div>
      <div className = "grid">
           {renderSquare(0)}
           {renderSquare(1)}
           {renderSquare(2)}
           {renderSquare(3)}
           {renderSquare(4)}
           {renderSquare(5)}
           {renderSquare(6)}
           {renderSquare(7)}
           {renderSquare(8)}      
      </div>
      <button onClick={() => HandleReset()}>Reset</button>
    </main>
  )
}
