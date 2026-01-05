// given an array of integers of length n where each of a[i] is unique
// given a target difference k
// find the amount of pairs that have a difference equal to k in A
function pairs(k, arr) {
    // Write your code here
    let sortedArray = arr.toSorted((a,b) => a-b);
    let numPairs = 0;
    let prevHighestIdx = 0;
    for(let i = 0; i < arr.length; i++){
        if(sortedArray.at(-1) - sortedArray[i] >= k){
            
            //sortedArray[prevHighestIdx+1] - sortedArray[i] === k
            let foundMatch = prevHighestIdx + sortedArray.toSpliced(prevHighestIdx+1).findIndex((val) => ((val - sortedArray[i]) === k ));
            if(Boolean(foundMatch)){
                console.log(foundMatch)
                numPairs++;
                prevHighestIdx = foundMatch;
            }
        }else{break;}
    }
    return numPairs;
}