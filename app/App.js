import {router} from './router-config.js';
// NOTE Router Enabled
const USE_ROUTER = true;

class App {
  // NOTE Single Page Application | Router will display necessary views based on URL
  constructor() {
    if (USE_ROUTER) {
      this.router = router;
      this.router.init(this);
    }
  }
}

const app = new App();
// @ts-ignore
window.app = app;
