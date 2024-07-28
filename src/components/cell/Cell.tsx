import { VALUES } from "../board/board.constants";

export interface CellProps {
    row: number;
    column: number;
    value: string;
}

export default function Cell({ row, column, value }: CellProps) {
    return (
        <div className={`cell cell-${value}`} data-row={row} data-column={column}></div>
    )
}