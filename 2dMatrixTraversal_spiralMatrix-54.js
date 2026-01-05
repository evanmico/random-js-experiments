/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrderRec = (matrix) => {
    // make recursive
    const returnArr = [];
    const m = matrix.length;
    const n = matrix[0].length;
    const spiral = (r, c) => {
        if (r >= n || c >= m || matrix[r][c] === "#") {
            return;
        }
        const val = matrix[r][c];
        matrix[r][c] = "#";
        spiral(r, c + 1);
        spiral(r + 1, c);
        spiral(r, c - 1);
        spiral(r - 1, c);
        returnArr.push(val);
        return;
    };
    spiral(0, 0);
    return returnArr;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = (matrix) => {
    const returnArr = [matrix[0][0]];
    //const totalPoints = matrix.length * matrix[0].length;
    let tP = 0;
    let lP = 0;
    let bP = matrix.length - 1;
    let rP = matrix[0].length - 1;
    let cR = 0;
    let cC = 0;
    let ran = false;

    while (returnArr.length < totalPoints) {
        /* 
        console.log(
            `BA\tcR: ${cR}\tcC: ${cC}\ttP,rP,bP,lP: ${tP}${rP}${bP}${lP}\treturnArr: ${returnArr}`
        );
        */
        //  1
        while (cC < rP && (ran = true)) {
            cC++;
            returnArr.push(matrix[cR][cC]);
        }
        if (ran) {
            if (tP !== bP) {
                tP++;
            } else {
                lP = rP;
            }
            ran = false;
        }
        /*         
        console.log(
            `A1\tcR: ${cR}\tcC: ${cC}\ttP,rP,bP,lP: ${tP}${rP}${bP}${lP}\treturnArr: ${returnArr}`
        );
        */
        //  2
        while (cR < bP && (ran = true)) {
            cR++;
            returnArr.push(matrix[cR][cC]);
        }

        if (ran) {
            if (rP !== lP) {
                rP--;
            } else {
                tP = bP;
            }
            ran = false;
        }
        /* 
        console.log(
            `A2\tcR: ${cR}\tcC: ${cC}\ttP,rP,bP,lP: ${tP}${rP}${bP}${lP}\treturnArr: ${returnArr}`
        );
        */
        //  3
        while (cC > lP && (ran = true)) {
            cC--;
            returnArr.push(matrix[cR][cC]);
        }
        if (ran) {
            if (bP !== tP) {
                bP--;
            } else {
                rP = lP;
            }
            ran = false;
        }
        /*         
        console.log(
            `A3\tcR: ${cR}\tcC: ${cC}\ttP,rP,bP,lP: ${tP}${rP}${bP}${lP}\treturnArr: ${returnArr}`
        );
        */
        //  4
        while (cR > tP && (ran = true)) {
            cR--;
            returnArr.push(matrix[cR][cC]);
        }
        if (ran) {
            if (lP !== rP) {
                lP++;
            } else {
                bP = tP;
            }
            ran = false;
        }
        /* 
        console.log(
            `A4\tcR: ${cR}\tcC: ${cC}\ttP,rP,bP,lP: ${tP}${rP}${bP}${lP}\treturnArr: ${returnArr}`
        );
        */
        /*
        if (returnArr.length > totalPoints) {
            break;
        }
        */
    }

    return returnArr;
};

const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const input2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(spiralOrder(input2));
