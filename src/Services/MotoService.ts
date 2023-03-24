import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import checkId from '../utils/idCheck';

class MotorcycleService {
  private model: MotorcycleODM;
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  constructor() {
    this.model = new MotorcycleODM();
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findById(id: string) {
    const verifyMoto = checkId(id);
    if (verifyMoto) return verifyMoto;
    const moto = await this.model.findById(id);

    if (!moto) {
      return { type: 'notFound', message: { message: 'Motorcycle not found' } };
    }

    return { type: 'success', message: this.createMotorcycleDomain(moto) };
  }

  public async findAll() {
    const motos = await this.model.findAll();
    return motos.map((moto) => this.createMotorcycleDomain(moto));
  }

  public async update(id: string, moto: IMotorcycle) {
    const verifyMoto = checkId(id);
    if (verifyMoto) return verifyMoto;
    const updatedMoto = await this.model.update(id, moto);
    if (!updatedMoto) {
      return { type: 'notFound', message: { message: 'Motorcycle not found' } };
    }

    return { type: 'success', message: this.createMotorcycleDomain(updatedMoto) };
  }

  public async delete(id: string) {
    const verifyMoto = checkId(id);
    if (verifyMoto) return verifyMoto;

    await this.model.delete(id);

    return { type: 'noContent', message: '' };
  }
}

export default MotorcycleService;