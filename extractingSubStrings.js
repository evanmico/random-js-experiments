const startIndexes = [1, 2, 1];
const endIndexes = [8, 5, 3];
const s = '*|**|*|*'
// find how many * are enclosed in | between each of the starting and ending indexes
const findNumStars = (s, startIndexes, endIndexes) => {
    return startIndexes.map((start, idx) => {
        let end = endIndexes[idx];
        let matchRegex = /(?<=\|)\*+(?=\|)/g;
        let matches =  s.substring(start-1,end).match(matchRegex);
        return (matches === null)?(0):matches.join('').length;
    })
}

console.log(findNumStars(s, startIndexes, endIndexes));