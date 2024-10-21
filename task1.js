class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getData() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }

  getData() {
    console.log(`${super.getData()}, battery level: ${this.batteryLevel}`);
  }
}

const myElectricCar = new ElectricCar("mercedes", "C class", 2000, 50);
myElectricCar.getData();
