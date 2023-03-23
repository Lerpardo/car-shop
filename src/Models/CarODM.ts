import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async update(id: string, car: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(id, car, { new: true });
  }

  public async delete(id: string): Promise<ICar | null> {
    return this.model.findByIdAndDelete(id);
  }
}

export default CarODM;