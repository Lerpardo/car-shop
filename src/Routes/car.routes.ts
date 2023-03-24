import { Router } from 'express';
import bodyParser from 'body-parser';
import CarController from '../Controllers/CarController';

const jsonParser = bodyParser.json();
const carRouter = Router();

const URL_BASE = '/cars';

carRouter.get(URL_BASE, (req, res, next) => new CarController(req, res, next).findAll()); // GET all cars

carRouter.get(`${URL_BASE}/:id`, (req, res, next) => new CarController(req, res, next).findById()); // GET car by id

carRouter.post(
  URL_BASE,
  jsonParser,

  (req, res, next) => new CarController(req, res, next).create(),
); // POST new car

carRouter.put(
  `${URL_BASE}/:id`,
  jsonParser,
  (req, res, next) => new CarController(req, res, next).update(),
); // PUT update car

carRouter.delete(
  `${URL_BASE}/:id`,
  (req, res, next) => new CarController(req, res, next).delete(),
); // DELETE car by id

export default carRouter;