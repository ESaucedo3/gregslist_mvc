import {generateId} from '../utils/GenerateId.js';

export class House {
  constructor(data) {
    this.id = data.id || generateId();
    this.year = data.year;
    this.name = data.name;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.sqft = data.sqft;
    this.price = data.price;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }

  get generateHouse() {
    return `<div class="col-md-4">
          <div class="card">
          <div class="text-end">
          <i onclick="app.HousesController.deleteHouse('${this.id}')" class="mdi mdi-delete-forever text-danger fs-2" role="button" title="Delete this ${this.name}"></i>
          </div>
            <img class="house-design" src="${this.imgUrl}" alt="${this.name}" />
            <div class="card-body">
              <h4 class="card-title text-center">${this.name}</h4>
              <h5 class="card-subtitle text-center">Year Built: ${this.year}</h5>
              <div class="text-center">
                <ul class="p-0 house-point">
                  <li class="d-inline">${this.bedrooms} Bedrooms |</li>
                  <li class="d-inline">${this.bathrooms} Bathrooms |</li>
                  <li class="d-inline">${this.sqft} SqFt</li>
                </ul>
              </div>
              <p class="card-text">${this.description}</p>
              <h4 class="text-center">Price: $${this.priceAsCurrency}</h4>
              <div class="d-flex justify-content-center mt-2">
                <button class="btn btn-outline-dark text-center" type="button">Purchase</button>
              </div>
            </div>
          </div>
        </div>`;
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat().format(this.price);
  }
}
