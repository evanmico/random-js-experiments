// run file with command npx @digitak/esrun constructTheRectangle-492.ts
/* Problem:
A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

    The area of the rectangular web page you designed must equal to the given target area.
    The width W should not be larger than the length L, which means L >= W.
    The difference between length L and width W should be as small as possible.

Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.
*/

function constructRectangle(area: number): number[] {
	// start with largest possible width that minimizes diff
	let w = Math.floor(Math.sqrt(area));
	// iterate down width to find largest width that divides area with no remainder
	while (area % w !== 0) {
		w--;
	}

	// calculate corresponding length for found width
	const l = area / w;

	// return l and width dimensions
	return [l, w];
}

console.log(constructRectangle(4)); // expects [2,2] return
console.log(constructRectangle(37)); // expects [37,1] return
console.log(constructRectangle(122122)); // expects [427,286] return
