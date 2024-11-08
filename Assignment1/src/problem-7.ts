{
  // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge() {
      const providedYear = this.year;
      const currentYear = new Date().getFullYear();
      const carAge = currentYear - providedYear;
      return carAge;
    }
  }
  const car = new Car("Honda", "Civic", 2024);
  console.log(car.getCarAge());
}
