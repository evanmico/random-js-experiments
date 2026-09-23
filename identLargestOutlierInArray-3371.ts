// run file with command npx @digitak/esrun identLargestOutlierInArray-3371.ts
/* Problem:
You are given an integer array nums. This array contains n elements, where exactly n - 2 elements are special numbers. One of the remaining two elements is the sum of these special numbers, and the other is an outlier.

An outlier is defined as a number that is neither one of the original special numbers nor the element representing the sum of those numbers.

Note that special numbers, the sum element, and the outlier must have distinct indices, but may share the same value.

Return the largest potential outlier in nums.

Constraints:

    3 <= nums.length <= 105
    -1000 <= nums[i] <= 1000
    The input is generated such that at least one potential outlier exists in nums.

*/
function getLargestOutlier(nums: number[]): number {
	// calculate sum of all elements in nums
	const total_sum = nums.reduce((a, b) => a + b);

	// create map to count frequency of each number in nums
	const num_freq_map = new Map();

	for (const num of nums) {
		// check if freq map has the num in its keys to increment or set to 1 if it doesn't have it
		num_freq_map.has(num)
			? num_freq_map.set(num, num_freq_map.get(num) + 1)
			: num_freq_map.set(num, 1);
	}

	return 1;
}

console.log(getLargestOutlier([-2, -1, -3, -6, 4]));
