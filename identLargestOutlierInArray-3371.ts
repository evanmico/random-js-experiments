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
	// set largest outlier to negative infinity as starting value
	let largest_outlier = -Infinity;
	for (const num of num_freq_map.keys()) {
		const potential_outlier = total_sum - 2 * num;

		if (
			num_freq_map.has(potential_outlier) &&
			(potential_outlier !== num || num_freq_map.get(num) > 1)
		) {
			largest_outlier = Math.max(largest_outlier, potential_outlier);
		}
	}
	return largest_outlier;
}

console.log(getLargestOutlier([2, 3, 5, 10])); // Expects 10 return
console.log(getLargestOutlier([-2, -1, -3, -6, 4])); // Expects 4 return
console.log(getLargestOutlier([1, 1, 1, 1, 1, 5, 5])); // Expects 5 return
