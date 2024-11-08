"use strict";
{
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
    class Car {
        constructor(make, model, year) {
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
