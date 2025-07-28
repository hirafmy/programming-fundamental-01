    function calculateRectangleArea(length: number, width: number): number {
  // The area is calculated by multiplying length by width
  return length * width;
}

// Example usage:
const rectLength = 5;
const rectWidth = 3;
const area = calculateRectangleArea(rectLength, rectWidth);

console.log(`The length is: ${rectLength}`);
console.log(`The width is: ${rectWidth}`);
console.log(`The area of the rectangle is: ${area}`); 
// Expected Output: The area of the rectangle is: 15