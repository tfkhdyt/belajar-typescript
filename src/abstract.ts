abstract class Vehicle {
  abstract wheels: number

  start(): void {
    console.log('Brummmm...')
  }
}

class Car extends Vehicle {
  wheels = 4
}

class Motorcycle extends Vehicle {
  wheels = 2
}

const car = new Car()
console.log(car.wheels)
car.start()

const motorcycle = new Motorcycle()
console.log(motorcycle.wheels)
motorcycle.start()
