/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    // go through grid till I find land "1"
    // trigger dfs from that point
    // mark all adjacent land that dfs finds with a visited label of "2"
    // once dfs finishes, continue through grid until next "1"
    // upon each landing on a point, mark with a 2
    // find all points around that are 1 and "explore" them
    // don't explore a point if it has a "2" already
    let islandCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                dfs(grid, i, j);
                islandCount++;
                // call dfs(grid, i,j)
            }
        }
    }
    return islandCount;
};
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslandsOptimized = (grid) => {
    // go through grid till I find land "1"
    // trigger dfs from that point
    // mark all adjacent land that dfs finds with a visited label of "0"
    // once dfs finishes, continue through grid until next "1"
    // upon each landing on a point, mark with a 0
    // explore all surrounding points
    // early return if point is not 1 or out of bounds of grid
    let islandCount = 0;
    const rows = grid.length;
    const columns = grid[0].length;
    /**
     *
     * @param {number} r
     * @param {number} c
     */
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= columns || grid[r][c] !== "1") {
            return; // early return for all invalid conditions
        }

        // set current node to "0"
        grid[r][c] = "0";
        // explore neighboring nodes
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === "1") {
                islandCount++;
                dfs(i, j);
            }
        }
    }
    return islandCount;
};

/**
 * @param {character[][]} grid
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
const dfs = (grid, i, j) => {
    grid[i][j] = "2";
    if (i > 0 && grid[i - 1][j] === "1") {
        dfs(grid, i - 1, j);
    }
    if (j > 0 && grid[i][j - 1] === "1") {
        dfs(grid, i, j - 1);
    }
    if (i < grid.length - 1 && grid[i + 1][j] === "1") {
        dfs(grid, i + 1, j);
    }
    if (j < grid[i].length - 1 && grid[i][j + 1] === "1") {
        dfs(grid, i, j + 1);
    }
    return;
};

/*const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];*/
const grid = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["0", "1", "0"],
];

console.log(numIslands(grid));
const grid2 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["0", "1", "0"],
];
console.log(numIslandsOptimized(grid2));
