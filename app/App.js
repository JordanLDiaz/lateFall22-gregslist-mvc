import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
// FIXME Step 6: register your controller and get your console log on your web page
class App {
  carsController = new CarsController();
  housesController = new HousesController();
}

window["app"] = new App();
