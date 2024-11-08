{
  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type Shape = Circle | Rectangle;
  const calculateShapeArea = (shape: Shape) => {
    if (shape.shape === "circle") {
      return Math.PI * (shape.radius * shape.radius);
    } else if (shape.shape === "rectangle") {
      return shape.height * shape.width;
    } else {
      return 0;
    }
  };
  console.log(calculateShapeArea({ shape: "rectangle", width: 4, height: 6 }));
}
