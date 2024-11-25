let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(Object(...arr));
/*function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}*/
function transpose(matrix) {
    return Object.keys(matrix[0])
        .map(colNumber => matrix.map(rowNumber => rowNumber[colNumber]));
}
/*
function transpose(a) {
    return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}
*/

/*requires lodash module
_.unzip(matrix);
*/
console.log(transpose([
    [1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]
]));
let dunce = 'hello';
console.log(`${dunce}`)
console.log(Object.fromEntries(Object.entries(arr[0])));
let groupedArrObj = (Object.keys(arr).map((key)=> Object.groupBy(arr,({} = String(key),idx)=>(
    (console.log(key)),
    (console.log(idx)),
    (console.log({[key]:key,val:arr[idx][key]})),
    ({[key]:key,val:arr[idx][key]})
))));
console.log(groupedArrObj[1]);
console.log(
    Object.groupBy(arr,({} = '0',idx)=>(
        (console.log(0)),
        (console.log(idx)),
        (console.log({['0']:'0',val:arr[idx][0]})),
        ({['0']:'0',val:arr[idx][0]})
    ))
)

//Object.groupBy(arr, ({Object.keys(arr)}) => Object.values(arr))
/*
let arrT = arr.map((rowV, idxR, arr,fullArr = arr) => (rowV.map((elem, idxC) => (
    fullArr[idxC][idxR]
))));
let arrTColSwap = arrT.map(
    (colV) => (
        colV.slice(0,colV.length/2).reduce((a, b) => a+b) <
        colV.slice(colV.length/2).reduce((a,b) => a+b)
    )?colV.toReversed():colV
);
let arrTColSwapT = arr.map((rowV, idxR, arr,fullArr = arrTColSwap) => (rowV.map((elem, idxC) => (
    fullArr[idxC][idxR]
))));
let arrTColSwapTRowSwap = arrTColSwapT.map(
    (rowV) => (
        rowV.slice(0,rowV.length/2).reduce((a, b) => a+b) <
        rowV.slice(rowV.length/2).reduce((a,b) => a+b)
    )?rowV.toReversed():rowV
);
//let arrIt = arr.entries();
//let perhaps = Object.groupBy(arr,(arrIt)=> arr);
console.log(perhaps);
console.log(arr);
console.log(arrT);
console.log(arrTColSwap);
console.log(arrTColSwapT);
console.log(arrTColSwapTRowSwap);
*/
