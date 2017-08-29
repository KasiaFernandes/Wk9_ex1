function getTriangleArea(a, h) {
    var triangleArea = a * h / 2;
    
    if (a <= 0 || h <= 0) {
        console.log("Wrong data!");
    } else {
        return triangleArea;
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea (10, 15);
var triangle2Area = getTriangleArea (7, 0);
var triangle3Area = getTriangleArea (8, 8);

console.log(triangle1Area, triangle2Area, triangle3Area);