import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private model: CarODM;
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car); 
    }
    return null;
  }

  constructor() {
    this.model = new CarODM();
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return this.createCarDomain(newCar);
  }
}

export default CarService;