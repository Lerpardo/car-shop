import { NextFunction, Request, Response } from 'express';
// import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import mapError from './errorMap';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService = new CarService();
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
  public async create() {
    try {
      const { body } = this.req;
      const newCar = await this.service.create(body);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const { type, message } = await this.service.findById(id);
      return this.res.status(mapError(type)).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const cars = await this.service.findAll();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const { body } = this.req;
      const { type, message } = await this.service.update(id, body);
      return this.res.status(mapError(type)).json(message);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    try {
      const { id } = this.req.params;
      const { type, message } = await this.service.delete(id);
      return this.res.status(mapError(type)).json(message);
    } catch (error) {
      this.next(error);
    }
  }
}
export default CarController;