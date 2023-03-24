import { Router } from 'express';
import bodyParser from 'body-parser';
import MotoController from '../Controllers/MotoController';

const jsonParser = bodyParser.json();
const motoRouter = Router();

const URL_BASE = '/motorcycles';

motoRouter.get(URL_BASE, (req, res, next) => new MotoController(req, res, next).findAll()); // GET all motos

motoRouter.get(
  `${URL_BASE}/:id`,
  (req, res, next) => new MotoController(req, res, next).findById(),
); // GET moto by id

motoRouter.post(
  URL_BASE,
  jsonParser,
  (req, res, next) => new MotoController(req, res, next).create(),
); // POST new moto

motoRouter.put(
  `${URL_BASE}/:id`,
  jsonParser,
  (req, res, next) => new MotoController(req, res, next).update(),
); // PUT update moto

motoRouter.delete(
  `${URL_BASE}/:id`,
  (req, res, next) => new MotoController(req, res, next).delete(),
); // DELETE moto by id

export default motoRouter;