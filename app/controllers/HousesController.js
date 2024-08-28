import {AppState} from '../AppState.js';
import {housesService} from '../services/HousesService.js';
import {getFormData} from '../utils/FormHandler.js';

export class HousesController {
  constructor() {
    console.log('Houses Controller Ready');
    AppState.on('houses', this.drawHouses);
    housesService.loadHouses();
  }

  drawHouses() {
    const houseList = document.getElementById('house-list');
    const houses = AppState.houses;

    houseList.innerHTML = '';
    houses.forEach((house) => (houseList.innerHTML += house.generateHouse));
  }

  createHouse() {
    event.preventDefault();
    const form = event.target;
    const houseDataFromForm = getFormData(form);
    console.log(houseDataFromForm);
    housesService.createHouse(houseDataFromForm);
  }

  deleteHouse(houseId) {
    const deleteMaybe = window.confirm('You sure you want to delete this listing?');
    if (!deleteMaybe) return;
    housesService.deleteHouse(houseId);
  }
}
