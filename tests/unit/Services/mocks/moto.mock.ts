import IMotorcycle from "../../../../src/Interfaces/IMotorcycle";
import Motorcycle from "../../../../src/Domains/Motorcycle";

const newMotorcycleInput: IMotorcycle = {
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
  }

const newMotorcycleOutput: Motorcycle = new Motorcycle(
    {
        "id": "6348513f34c397abcad040b2",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      }
)

export { newMotorcycleInput, newMotorcycleOutput };