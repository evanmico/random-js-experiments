const dailyTemperatures = (temperatures) => {
    const returnArr = new Array(temperatures.length).fill(0);
    const indexStack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (
            indexStack.length > 0 &&
            temperatures[indexStack[indexStack.length - 1]] < temperatures[i]
        ) {
            const idx = indexStack.pop();
            returnArr[idx] = i - idx;
        }
        indexStack.push(i);
    }
    return returnArr;
};
