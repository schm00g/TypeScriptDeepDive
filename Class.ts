class Point {
  constructor(public x: number, public y: number) {
  }
  add(point: Point) {
      return new Point(this.x + point.x, this.y + point.y);
  }
  subtract(point: Point) { 
    return new Point(this.x - point.x, this.y - point.y);
  }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // { x: 10, y: 30 }
var p4 = p3.subtract(p2);
console.log(p3);
console.log(p4);
