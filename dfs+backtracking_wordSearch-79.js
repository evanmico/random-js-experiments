/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = (board, word) => {
    // loop through all cells or until the word is found
    // each iteration check if the cell is the start of the word, if not continue
    // if it is the start of the word, call a recursive "word search" function that:
    // early return conditions:
    //   r or c outside board bounds, wordIdx > word.length-1, curr cell is visited, curr cell not next in word, if curr cell not in word, mark visited and return
    // 1. marks letters not in the word as visited
    //
    const rows = board.length;
    const columns = board[0].length;

    const recursiveSearch = (r, c, wordIdx) => {
        //console.log(`r: ${r}\tc: ${c}\tcurrLetter: ${word[wordIdx]}`);
        /*
        if (wordIdx === 0) {
            console.log(`r: ${r}\tc: ${c}\tboardVal: ${board[r][c]}`);
        }
        */
        if (wordIdx === word.length) {
            // success case since if it made it 1 over length of word, then it must have found everything including the lengh of word
            return true;
        }
        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= columns ||
            board[r][c] !== word[wordIdx]
        ) {
            return false;
        } // early return

        const val = board[r][c];
        board[r][c] = "#";
        const found = // this is short circuiting since if any one of these returns true before the others, it doesn't call the others
            recursiveSearch(r + 1, c, wordIdx + 1) ||
            recursiveSearch(r - 1, c, wordIdx + 1) ||
            recursiveSearch(r, c + 1, wordIdx + 1) ||
            recursiveSearch(r, c - 1, wordIdx + 1);
        board[r][c] = val;
        return found;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (board[i][j] === word[0] && recursiveSearch(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
const word = "ABCCED";
const board2 = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
];
const word2 = "ABCB";

console.log(exist(board2, word2));
