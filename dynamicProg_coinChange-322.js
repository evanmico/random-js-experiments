// My initial poorly thought out solution
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeOG = (coins, amount) => {
    if (amount === 0) return 0;
    // sort coins from least to greatest;
    coins.sort((a, b) => a - b);
    console.log(coins);
    const dp = new Int32Array(coins.length);
    // find amount of coins needed to match amount at that coin size or smaller
    let min = -1;
    for (let i = 0; i < coins.length; i++) {
        // compare current coin size with running total and subtract it if the coin size is less than running total or decrement to next smallest coin type if it is greater than running total
        // if there is no next smallest coin size, then set dp[i] = -1
        let runningTotal = amount;
        let j = i;
        while (j >= 0 && runningTotal > 0) {
            console.log(
                `coins[${i}]: ${coins[i]}\tcoins[${j}]: ${coins[j]}\trunningTotal: ${runningTotal}`
            );
            if (runningTotal - coins[j] >= 0) {
                runningTotal -= coins[j];
                dp[i]++;
            } else if (j === 0) {
                dp[i] = -1; // mark impossible
                break; // break loop
            } else {
                j--;
            }
        }

        if (dp[i] !== -1 && min === -1) {
            min = dp[i];
        } else if (dp[i] !== -1 && dp[i] < min) {
            min = dp[i];
        }
    }

    console.log(dp);
    return min;
};
// a better solution I got from a video while learning about dynamic programming, but uses recursion so slow
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeRecursion = (coins, amount) => {
    if (amount === 0) return 0;
    const dp = new Map();
    const minCoins = (amount, coins) => {
        if (dp.has(amount)) {
            return dp.get(amount);
        }
        if (amount === 0) {
            return 0;
        }
        let answer;
        for (let i = 0; i < coins.length; i++) {
            subproblem = amount - coins[i];
            if (subproblem < 0) {
                continue;
            }
            //console.log(`b_Comp: ${answer}`)
            const subPminCoins = minCoins(subproblem, coins);
            if (
                typeof subPminCoins !== "undefined" &&
                typeof answer !== "undefined"
            ) {
                answer = Math.min(subPminCoins + 1, answer);
            } else if (typeof subPminCoins !== "undefined") {
                answer = subPminCoins + 1;
            }
            //console.log(`a_Comp: ${answer}`)
        }
        dp.set(amount, answer);
        return answer;
    };
    const returnCount = minCoins(amount, coins);
    //console.log(returnCount);
    return typeof returnCount === "undefined" ? -1 : returnCount;
};
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = (coins, amount) => {
    if (amount === 0) return 0;
    //let dp = new Map();
    const dp = new Array(amount + 1);

    //dp.set(0,0)
    dp[0] = 0;
    for (let i = 1; i < amount + 1; i++) {
        for (let j = 0; j < coins.length; j++) {
            const subproblem = i - coins[j];
            if (subproblem < 0) {
                continue;
            }

            if (
                typeof dp[i] !== "undefined" &&
                typeof dp[subproblem] !== "undefined"
            ) {
                dp[i] = Math.min(dp[i], dp[subproblem] + 1);
            } else if (typeof dp[subproblem] !== "undefined") {
                dp[i] = dp[subproblem] + 1;
            }
        }
    }
    const returnCount = dp[amount];
    //console.log(returnCount);
    return typeof returnCount === "undefined" ? -1 : returnCount;
};
const test = [[1, 2, 5], 11]; // expected 3
const test2 = [[2], 3]; // expected -1
const test3 = [[1], 0]; // expected 0
const test4 = [[186, 419, 83, 408], 6249]; // expected 20

console.log(coinChange(...test)); // got 3
console.log(coinChange(...test2)); // got -1
console.log(coinChange(...test3)); // got 0
console.log(coinChange(...test4)); // got 20
