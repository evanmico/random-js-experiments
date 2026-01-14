/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = (numCourses, prerequisites) => {
    // first build dependency map?
    // map has values from 0 to numCourses - 1
    const depMap = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
        // fill depMap
        if (prerequisites[i][0] === prerequisites[i][1]) return false; // self cycle detection
        if (depMap.has(prerequisites[i][1])) {
            depMap.set(
                prerequisites[i][1],
                depMap.get(prerequisites[i][1]).concat([prerequisites[i][0]])
            );
        } else {
            depMap.set(prerequisites[i][1], [prerequisites[i][0]]);
        }
    }
    //console.log(depMap);
    const depArr = new Int32Array(numCourses);
    let runningDeps = 0;
    for (let i = 0; i < prerequisites.length; i++) {
        depArr[prerequisites[i][0]]++;
        runningDeps++;
    }
    // prefill nodequeue with no dependency things
    const nodeQueue = [];
    for (let i = 0; i < depArr.length; i++) {
        if (depArr[i] === 0) nodeQueue.push(i);
    }
    if (nodeQueue.length === 0) {
        return false;
    } // means a cycle that stops from taking classes
    let coursesTaken = 0;
    //console.log(depArr);
    while (nodeQueue.length > 0 && coursesTaken <= numCourses) {
        coursesTaken++;
        if (depMap.has(nodeQueue[0])) {
            //console.log(depMap);
            depMap.get(nodeQueue[0]).forEach((dep) => {
                depArr[dep]--;
                runningDeps--;
                if (depArr[dep] === 0) {
                    //console.log(depArr)
                    nodeQueue.push(dep);
                }
            });
        }
        //console.log(depArr);
        nodeQueue.shift();
    }
    //console.log(`coursesTaken: ${coursesTaken}\tnumCourses: ${numCourses}\trunningDeps: ${runningDeps}`)
    //console.log(`nodeQueue: ${nodeQueue}`)
    if (
        nodeQueue.length === 0 &&
        coursesTaken <= numCourses &&
        runningDeps === 0
    ) {
        // only needs the runningDeps ==== 0 check, but for some reason it's faster if I have all the others too
        return true;
    } else {
        return false;
    }
};

const test = [2, [[1, 0]]]; // expect true
const test2 = [
    2,
    [
        [1, 0],
        [0, 1],
    ],
]; // expect false
const test3 = [
    5,
    [
        [1, 4],
        [2, 4],
        [3, 1],
        [3, 2],
    ],
]; // expect true
const test4 = [
    20,
    [
        [0, 10],
        [3, 18],
        [5, 5],
        [6, 11],
        [11, 14],
        [13, 1],
        [15, 1],
        [17, 4],
    ],
]; // expect false
const test5 = [
    3,
    [
        [1, 0],
        [1, 2],
        [0, 1],
    ],
]; // expect false

console.log(canFinish(...test)); // got true
console.log(canFinish(...test2)); // got false
console.log(canFinish(...test3)); // got true
console.log(canFinish(...test4)); // got false
console.log(canFinish(...test5)); // got false
