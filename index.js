let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers(){
    return this.trips().map(trip => {
      return trip.passenger();
    });
    drivers(){
    return this.trips().map(trip => {
      return trip.driver();
    }); 
  }
}

class Passenger { 
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
}