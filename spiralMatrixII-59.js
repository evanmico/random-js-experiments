/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = (n) => {
    const returnArray = Array.from({ length: n }, () => new Array(n));
    let currValue = 1;
    let r = 0;
    let c = 0;
    let lP = 0;
    let tP = 0;
    while (currValue <= n * n) {
        returnArray[r][c] = currValue;
        console.log(`r: ${r}\tc:${c}\tcurrVal:${currValue}`);
        if (c < n - 1 && typeof returnArray[r][c + 1] === "undefined") {
            console.log(`right`);
            currValue++;
            c++;
            tP++;
        } else if (r < n - 1 && typeof returnArray[r + 1][c] === "undefined") {
            console.log(`down`);
            currValue++;
            r++;
        } else if (c > lP && typeof returnArray[r][c - 1] === "undefined") {
            console.log(`left`);
            currValue++;
            c--;
        } else if (r > tP && typeof returnArray[r - 1][c] === "undefined") {
            console.log(`up`);
            currValue++;
            r--;
            lP++;
        } else {
            console.log(`FAIL`);
            break;
        }
    }
    console.log(
        `F_tP: ${tP}\tr: ${r}\tc: ${c}\treturnArray[r-1][c]: ${
            returnArray[r - 1][c]
        }`
    );
    console.log(returnArray);
    return returnArray;
};
