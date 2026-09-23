// run file with command npx @digitak/esrun rectangleOverlap-836.ts
/* Problem:
An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

*/

function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
	// set the coords to vars for easier use
	const [rec1x1, rec1y1, rec1x2, rec1y2] = rec1;
	const [rec2x1, rec2y1, rec2x2, rec2y2] = rec2;

	// get ranges of x and y of each rectangle
	type RectRange = {
		lower: number;
		upper: number;
	};
	type RectObject = {
		x: RectRange;
		y: RectRange;
	};
	const rec1_x_Range: RectRange = { lower: rec1x1, upper: rec1x2 };
	const rec1_y_Range: RectRange = { lower: rec1y1, upper: rec1y2 };
	const rec2_x_Range: RectRange = { lower: rec2x1, upper: rec2x2 };
	const rec2_y_Range: RectRange = { lower: rec2y1, upper: rec2y2 };
	const rec1_Obj: RectObject = {
		x: rec1_x_Range,
		y: rec1_y_Range,
	};
	const rec2_Obj: RectObject = {
		x: rec2_x_Range,
		y: rec2_y_Range,
	};
	// early return for same coordinates for both rectangles
	if (
		rec1_Obj.x.lower === rec2_Obj.x.lower &&
		rec1_Obj.x.upper === rec2_Obj.x.upper &&
		rec1_Obj.y.lower === rec2_Obj.y.lower &&
		rec1_Obj.y.upper === rec2_Obj.y.upper
	) {
		return true;
	}
	// First check if any overlap in the x ranges
	// check if left edge of rec2 falls within x range of rec1
	const xInterceptLeftCorner: boolean =
		(rec1_Obj.x.lower < rec2_Obj.x.lower &&
			rec2_Obj.x.lower < rec1_Obj.x.upper) ||
		(rec2_Obj.x.lower < rec1_Obj.x.lower &&
			rec1_Obj.x.lower < rec2_Obj.x.upper);

	// check if right edge of rectangle 2 falls within x range of rectangle 1
	const xInterceptRightCorner: boolean =
		(rec1_Obj.x.lower < rec2_Obj.x.upper &&
			rec2_Obj.x.upper < rec1_Obj.x.upper) ||
		(rec2_Obj.x.lower < rec1_Obj.x.upper &&
			rec1_Obj.x.upper < rec2_Obj.x.upper);

	// set flag if any x intercept
	const xIntercept = xInterceptLeftCorner || xInterceptRightCorner;

	// Second check for overlap in y ranges
	// check if bottom edge of rect 2 is within y-range of rectangle 1
	const yInterceptLeftCorner: boolean =
		(rec1_Obj.y.lower < rec2_Obj.y.lower &&
			rec2_Obj.y.lower < rec1_Obj.y.upper) ||
		(rec2_Obj.y.lower < rec1_Obj.y.lower &&
			rec1_Obj.y.lower < rec2_Obj.y.upper);
	// check if top edge of rect 2 is within y-range of rectangle 1
	const yInterceptRightCorner: boolean =
		(rec1_Obj.y.lower < rec2_Obj.y.upper &&
			rec2_Obj.y.upper < rec1_Obj.y.upper) ||
		(rec2_Obj.y.lower < rec1_Obj.y.upper &&
			rec1_Obj.y.upper < rec2_Obj.y.upper);

	// set flag if any y intercept
	const yIntercept = yInterceptLeftCorner || yInterceptRightCorner;

	// both x and y must overlap for rectangles to intersect, otherwise return false
	return xIntercept && yIntercept;
}

console.log(isRectangleOverlap([0, 0, 1, 1], [0, 0, 1, 1]));
