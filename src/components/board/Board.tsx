import { SyntheticEvent, useEffect, useState } from "react";
import Cell from "../cell/Cell";
import { INITIAL_BOARD_STATE, VALUES } from "./board.constants";
import { checkWinningBoard } from "@/src/utils/validator";

export default function Board() {
    const [result, setResult] = useState<any>();
    const [moves, setMove] = useState(0);
    const [rival, changeRival] = useState(VALUES.X);
    const [boardState, setBoardState] = useState(INITIAL_BOARD_STATE);

    const makeMove = ({ target }: SyntheticEvent) => {
        const row = parseInt((target as HTMLElement).getAttribute('data-row') || '0');
        const column = parseInt((target as HTMLElement).getAttribute('data-column') || '0');

        if (boardState[row][column] === '') {
            const newState = [...boardState];
            newState[row][column] = rival;
            setBoardState(newState);
            changeRival(previousRival => previousRival === VALUES.X ? VALUES.O : VALUES.X)
        }

        setMove(moves + 1)
    }

    useEffect(() => {
        if (moves > 0) {
            const result = checkWinningBoard(boardState);
            if (result && result.player !== '') {
                console.log(`Player ${result.player} won!`);
                setResult(result);
            }
        }
    }, [boardState])

    return (
        <div className="board" onClick={makeMove}>
            {boardState.map((row, rowIndex) => row.map((cell, cellIndex) => (<Cell
                key={`${rowIndex}-${cellIndex}`}
                row={rowIndex}
                column={cellIndex}
                value={cell}
            />)))}
        </div>
    )
} 