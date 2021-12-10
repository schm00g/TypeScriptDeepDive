interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { /* do something */ }

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint2D({ x: 0, y: 0 }); // Error: missing information `y`

// duck typing is where: 
// an object of a particular type is compatible with a 
// method or function, if it supplies all the methods / 
// method signatures asked of it by the method / 
// function at run time