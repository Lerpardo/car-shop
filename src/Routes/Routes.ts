import { Router } from 'express';
import bodyParser from 'body-parser';
import CarController from '../Controllers/CarController';

const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
const carRouter = Router();

carRouter.post('/cars', jsonParser, (req, res, next) => new CarController(req, res, next).create());

export default carRouter;