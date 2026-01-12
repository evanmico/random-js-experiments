/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = (nums) => {
    // go through nums and get minimum and maximum
    // set create an array of length max - min + 2 filled with 0s to initialize a BIT 'tree'
    // go through nums from end to start and for each i
    //      1. query the value of nums[i] - 1 + offset in the BIT tree and put the return into the according index of a new return array counts (this does the getting the values from the min to value in BIT array to get total amount of nums smaller than num)
    //      2. update the BIT tree by adding 1 at pos of value (this changes the value at the index of nums[i] + offset and goes up through the tree to update all other affected values in tree to update frequencies in the tree)
    // after loop return the counts array
    // Time Complexity: O(n) to get min and max in nums + O(2n) to make and fill BIT 'tree' array with 0s [not sure about this now that I am using Typed arrays since I don't need to explicitly fill them with 0s, they initialize with them] + O(n2log(m)) to query and update BIT tree = O(4n(1 + 2log(m))) = O(nlog(m)) (m is range of values in nums)
    let min;
    let max;
    for (let i = 0; i < nums.length; i++) {
        if (typeof min === "undefined" || nums[i] < min) {
            min = nums[i];
        }
        if (typeof max === "undefined" || nums[i] > max) {
            max = nums[i];
        }
    }
    const numsBitT = new Int32Array(max - min + 2); // maximum + minimum vals given are within an Int32 size so can do this. keeping it Int32, not Uint32 cause worried about bitwise comparisons with unsigned and signed values
    const offset = 1 - min; // offset to affect each num to get its pos equivalent in tree (the 1 is cause a BIT tree is 1 indexed)

    const counts = new Int32Array(nums.length); // Int32Array cause max val according to problem is within these values

    const query = (pos) => {
        let count = 0; // trying no recursion approach
        while (pos > 0) {
            count += numsBitT[pos];
            pos = pos - (pos & -pos);
        }
        return count;
        /*
        if (pos < 1) {
            return 0; // early return of 0 if pos falls below 1
        }
        //console.log(`query position: ${pos}`)
        return numsBitT[pos] + query(pos - (pos & -pos)); // don't need to worry about casting for comparison cause all nums are at most within Int32 (never BigInt)
        */
    };

    const update = (value, pos) => {
        while (pos < numsBitT.length) {
            // trying no recursion approach
            numsBitT[pos] += value;
            pos = pos + (pos & -pos);
        }
        /*
        if (pos > numsBitT.length - 1) {
            return {}; // early return of void if pos goes beyond length of BIT tree
        }
        //console.log(`update position: ${pos}\tupdate value: ${value}`)
        numsBitT[pos] += value; // add passed value to tree at pos
        return update(value, pos + (pos & -pos)); // call self with next pos after bitwise math
        */
    };

    for (let i = nums.length - 1; i >= 0; i--) {
        // query nums[i] + offset in numsBitT
        // place return value of query in counts[i]
        // console.log(numsBitT)
        counts[i] = query(nums[i] - 1 + offset); // query values smaller
        // update numsBitT with value of query at position nums[i] + offset
        update(1, nums[i] + offset); // add one to how many times we've seen nums[i] in tree
    }
    // console.log(numsBitT)
    return counts;
};

const input = [5, 2, 6, 1];
console.log(countSmaller(input)); // Expected to return [2,1,1,0] and does so
