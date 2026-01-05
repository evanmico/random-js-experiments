/* /**
 * @param {number[]} nums
 * @return {number}
 */
/*
var longestConsecutive = (nums) => {
	if (nums.length === 0) {
		return 0;
	}
	const m = nextPrime(Math.floor(nums / 2));
	const hashSet = new Array(m).fill([]);
	const longestConsecutive = 1;
	for(nums)
    return longestConsecutive;
};
function isPrime(num) {
	if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
	if (num <= 3) return true; // 2 and 3 are prime numbers

	// Check for even numbers and multiples of 3
	if (num % 2 === 0 || num % 3 === 0) return false;

	// Check for factors from 5 to the square root of num
	for (let i = 5; i * i <= num; i += 6) {
		if (num % i === 0 || num % (i + 2) === 0) return false;
	}
	return true;
}
function nextPrime(start) {
	let num = start + 1; // Start checking from the next number
	while (true) {
		if (isPrime(num)) {
			return num; // Return the first prime found
		}
		num++;
	}
}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
    if (nums.length <= 1) {
        return nums.length;
    }

    const numSet = new Set(nums);

    let lSeq = 1;

    numSet.forEach((num) => {
        if (!numSet.has(num - 1) && numSet.has(num + lSeq)) {
            let tSeq = 1;

            while (numSet.has(num + tSeq)) {
                tSeq++;
            }

            if (tSeq > lSeq) {
                lSeq = tSeq;
            }
        }
    });

    return lSeq;
};

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
console.log(longestConsecutive(nums));
