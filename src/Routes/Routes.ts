import { Router } from 'express';
import bodyParser from 'body-parser';
import CarController from '../Controllers/CarController';

const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
const carRouter = Router();

carRouter.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

carRouter.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());

carRouter.post('/cars', jsonParser, (req, res, next) => new CarController(req, res, next).create());

carRouter.put(
  '/cars/:id',
  jsonParser,
  (req, res, next) => new CarController(req, res, next).update(),
);

carRouter.delete('/cars/:id', (req, res, next) => new CarController(req, res, next).delete());

export default carRouter;