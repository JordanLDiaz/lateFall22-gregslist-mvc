import { CarsController } from "./Controllers/CarsController.js";
import { FurnituresController } from "./Controllers/FurnituresController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { JobsController } from "./Controllers/JobsController.js";
import { PetsController } from "./Controllers/PetsController.js";
// FIXME Step 6: register your controller and get your console log on your web page
class App {
  carsController = new CarsController();
  housesController = new HousesController();
  jobsController = new JobsController();
  petsController = new PetsController();

  furnituresController = new FurnituresController();
}

window["app"] = new App();
