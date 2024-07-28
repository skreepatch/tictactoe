export function checkWinningBoard(board: string[][]) {
    // Check rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] !== ' ' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return { player: board[row][0], coordinates: [[row, 0], [row, 1], [row, 2]] };
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== ' ' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return { player: board[0][col], coordinates: [[0, col], [1, col], [2, col]] };
        }
    }

    // Check diagonals
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return { player: board[0][0], coordinates: [[0, 0], [1, 1], [2, 2]] };
    }
    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return { player: board[0][2], coordinates: [[0, 2], [1, 1], [2, 0]] };
    }

    return null;
}
