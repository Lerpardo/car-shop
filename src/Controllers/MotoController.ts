import { NextFunction, Request, Response } from 'express';
import MotoService from '../Services/MotoService';
import mapError from './errorMap';

class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotoService = new MotoService();

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async create() {
    try {
      const { body } = this.req;
      const newMoto = await this.service.create(body);
      return this.res.status(201).json(newMoto);
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
      const motos = await this.service.findAll();
      return this.res.status(200).json(motos);
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

export default MotoController;