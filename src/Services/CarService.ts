import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import checkId from '../utils/idCheck';

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

  public async findById(id: string) {
    const verifyCar = checkId(id);
    if (verifyCar) return verifyCar;
    const car = await this.model.findById(id);

    if (!car) {
      return { type: 'notFound', message: { message: 'Car not found' } };
    }

    return { type: 'success', message: this.createCarDomain(car) };
  }

  public async findAll() {
    const cars = await this.model.findAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async update(id: string, car: ICar) {
    const verifyCar = checkId(id);
    if (verifyCar) return verifyCar;
    const updatedCar = await this.model.update(id, car);
    if (!updatedCar) {
      return { type: 'notFound', message: { message: 'Car not found' } };
    }

    return { type: 'success', message: this.createCarDomain(updatedCar) };
  }

  public async delete(id: string) {
    const verifyCar = checkId(id);
    if (verifyCar) return verifyCar;

    await this.model.delete(id);

    return { type: 'noContent', message: '' };
  }
}

export default CarService;