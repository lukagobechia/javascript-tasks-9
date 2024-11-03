class CarFactory {
    constructor() {
        this.cars = [];
    }

    addCar(make, model, year) {
        const id = this.cars.length + 1;
        this.cars.push({
            id: id,
            make: make,
            model: model,
            year: year
        });
    }

    deleteCar(id) {
        this.cars = this.cars.filter(car => car.id !== id);
        console.log(`Car with ID ${id} has been deleted`);
    }

    updateCar(id, newMake, newModel, newYear) {
        const car = this.cars.find(car => car.id === id);
        if (car) {
            car.make = newMake || car.make;
            car.model = newModel || car.model;
            car.year = newYear || car.year;
            console.log(`Car with ID ${id} has been updated`);
        } else {
            console.log(`Car with ID ${id} not found`);
        }
    }

    getAllCars() {
        for (const car of this.cars)
            console.log(
              `No: ${car.id}\nMake: ${car.make}\nModel: ${car.model}\nYear: ${car.year}\n------------------`
            );
    }
}

const factory1 = new CarFactory();
factory1.addCar("car1", "model1", 2015);
factory1.addCar("car2", "model2", 2010);
factory1.deleteCar(2);
factory1.updateCar(1, "bmw", "model3", 2021);
factory1.getAllCars();
