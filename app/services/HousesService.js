import {AppState} from '../AppState.js';
import {House} from '../models/House.js';
import {loadState, saveState} from '../utils/Store.js';

class HousesServices {
  deleteHouse(houseId) {
    const houses = AppState.houses;
    const houseIndex = houses.findIndex((house) => house.id === houseId);
    houses.splice(houseIndex, 1);
    this.saveHouses();
  }
  createHouse(houseFormData) {
    const houses = AppState.houses;
    houses.push(new House(houseFormData));
    this.saveHouses();
  }

  saveHouses() {
    saveState('houses', AppState.houses);
  }

  loadHouses() {
    const acquireHouses = loadState('houses', [House]);
    AppState.houses = acquireHouses;
  }
}

export const housesService = new HousesServices();
