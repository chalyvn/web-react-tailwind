import React, {useState} from 'react';
import Board from "./Board";
import "./GameStyle.css"
import {calculateWinner} from "../../helpers";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board]; // tao ra 1 ban clone cua board
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    };
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <button className="btn-primary" onClick={handleResetGame}>Reset game</button>
            {winner && <h1 className="game-winner">
                {winner ? `Winner is ${winner}` : ""}
            </h1>}
        </div>
    );
};

export default Game;
