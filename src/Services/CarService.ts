import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import checkId from '../utils/idCheck';

class CarService {
  // private model: CarODM;
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car); 
    }
    return null;
  }

  // constructor() {
  //   this.model = new CarODM();
  // }
  
  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findById(id: string) {
    const verifyCar = checkId(id);
    if (verifyCar) {
      return { type: 'unprocessable', message: { message: 'Invalid mongo id' } };
    }
    const carODM = new CarODM();
    const car = await carODM.findById(id);

    if (car === null) {
      return { type: 'notFound', message: { message: 'Car not found' } };
    }

    return { type: 'success', message: this.createCarDomain(car) };
  }

  public async findAll() {
    const carODM = new CarODM();
    const cars = await carODM.findAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async update(id: string, car: ICar) {
    const verifyCar = checkId(id);
    if (verifyCar) return verifyCar;
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);
    if (!updatedCar) {
      return { type: 'notFound', message: { message: 'Car not found' } };
    }

    return { type: 'success', message: this.createCarDomain(updatedCar) };
  }

  public async delete(id: string) {
    const verifyCar = checkId(id);
    if (!verifyCar) {
      return { type: 'unprocessable', message: { message: 'Invalid mongo id' } };
    }
    const carODM = new CarODM();
    await carODM.delete(id);

    return { type: 'noContent', message: '' };
  }
}

export default CarService;