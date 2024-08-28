import {Car} from './models/Car.js';
import {House} from './models/House.js';
import {EventEmitter} from './utils/EventEmitter.js';
import {createObservableProxy} from './utils/ObservableProxy.js';

class ObservableAppState extends EventEmitter {
  /**@type {Car[]} */
  cars = [
    new Car({
      make: 'Honda',
      model: 'Civic',
      mileage: 100000,
      year: 1990,
      price: 10000,
      color: '#d40100',
      imgUrl: 'https://images.unsplash.com/photo-1716167950737-ac635698a16a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Red and shiny, low miles, owned by grandma',
      transmission: 'manual',
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      mileage: 100000,
      year: 2006,
      price: 10000,
      color: '#004e63',
      imgUrl: 'https://images.unsplash.com/photo-1705440158861-f26c436ac6fa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Blue and shiny, low miles, owned by grandma',
      transmission: 'manual',
    }),
    new Car({
      make: 'Ford',
      model: 'F-150',
      mileage: 150,
      year: 2024,
      price: 100000,
      color: '#080b0d',
      imgUrl: 'https://images.unsplash.com/photo-1590043586837-35512e866a4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Black and shiny, low miles, owned by grandpa',
      transmission: 'automatic',
    }),
  ];

  /**@type {House[]} */
  houses = [
    new House({
      year: '2021',
      name: 'Duplex',
      bedrooms: 4,
      bathrooms: 2,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home Duplex in its glorious form',
      imgUrl: 'https://archivaldesigns.com/cdn/shop/files/2196DayRender_1200x.jpg?v=1724442281',
    }),
    new House({
      year: '2022',
      name: 'Cap Cod',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1300,
      price: 400000,
      description: 'Newly renovated mid-century modern home Cape Cod in its glorious form',
      imgUrl: 'https://www.thehousedesigners.com/images/plans/01/LQB/bulk/1985/1985-front_m.webp',
    }),
    new House({
      year: '2023',
      name: 'Modern',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      price: 410000,
      description: 'Newly renovated mid-century modern home Duplex in its glorious form',
      imgUrl: 'https://d1ja9tyo8nbkbc.cloudfront.net/50428124_S0405/S0405/S0405-R0100/1077682665/2003357517287.jpg?version=1721415914&width=1024',
    }),
  ];
}

export const AppState = createObservableProxy(new ObservableAppState());
