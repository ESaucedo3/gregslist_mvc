import {CarsController} from './controllers/CarsController.js';
import {HomeController} from './controllers/HomeController.js';
import {HousesController} from './controllers/HousesController.js';
import {Router} from './utils/Router.js';

// NOTE Register URL paths, controllers, views, etc here
export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: 'app/views/HomeView.html',
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html',
  },
  {
    path: '#/houses',
    controllers: [HousesController],
    view: 'app/views/HousesView.html',
  },
]);
