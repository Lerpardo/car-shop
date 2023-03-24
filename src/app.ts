import express from 'express';
import carRoutes from './Routes/car.routes';
import motoRoutes from './Routes/moto.routes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(carRoutes);
app.use(motoRoutes);
app.use(ErrorHandler.handle);

export default app;
