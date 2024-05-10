import React, {useState} from 'react';
import Board from "./Board";
import "./GameStyle.css"
import {calculateWinner} from "../../helpers";

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    const [state, setState] = useState({
        board: Array(9).fill(null),
        xIsNext: true,
    })
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        const boardCopy = [...state.board]; // tao ra 1 ban clone cua board
        if(winner || boardCopy[index]) return;
        boardCopy[index] = state.xIsNext ? 'X' : 'O';
        // setBoard(boardCopy);
        // setXIsNext(!state.xIsNext);
        setState({
            ...state, // tao ra 1 ban clone cua state truoc khi update state de ko mat cac item ben trong state
            board: boardCopy,
            xIsNext: !state.xIsNext,
        })
    };
    const handleResetGame = () => {
        // setBoard(Array(9).fill(null));
        // setXIsNext(true);
    };
    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>
            <button className="btn-primary" onClick={handleResetGame}>Reset game</button>
            {winner && <h1 className="game-winner">
                {winner ? `Winner is ${winner}` : ""}
            </h1>}
        </div>
    );
};

export default Game;
