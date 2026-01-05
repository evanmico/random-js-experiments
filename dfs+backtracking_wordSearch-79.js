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
    found = false;
    const rows = board.length;
    const columns = board[0].length;

    const recursiveSearch = (r, c, wordIdx) => {
        //console.log(`r: ${r}\tc: ${c}\tcurrLetter: ${word[wordIdx]}`);
        /*
        if (wordIdx === 0) {
            console.log(`r: ${r}\tc: ${c}\tboardVal: ${board[r][c]}`);
        }
        */
        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= columns ||
            board[r][c] === "#"
        ) {
            return;
        } // early return

        if (board[r][c] === word[wordIdx] && wordIdx < word.length - 1) {
            const val = board[r][c];
            board[r][c] = "#";
            recursiveSearch(r + 1, c, wordIdx + 1);
            recursiveSearch(r - 1, c, wordIdx + 1);
            recursiveSearch(r, c + 1, wordIdx + 1);
            recursiveSearch(r, c - 1, wordIdx + 1);
            board[r][c] = val;
        } else if (board[r][c] === word[wordIdx]) {
            /*
            console.log(
                `currLetter: ${word[wordIdx]}\twordIdx: ${wordIdx}\tboard[${r}][${c}]: ${board[r][c]}`
            );
            */
            found = true;
            return;
        } else {
            return;
        }
    };

    for (let i = 0; i < board.length && !found; i++) {
        for (let j = 0; j < board[0].length && !found; j++) {
            if (board[i][j] === word[0]) {
                recursiveSearch(i, j, 0);
            }
        }
    }

    return found;
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

console.log(exist(board, word));
