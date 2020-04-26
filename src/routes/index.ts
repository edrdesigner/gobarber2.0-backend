import { Router } from 'express';
import appointmentsRounter from './appointments.routes';
import usersRounter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRounter);
routes.use('/users', usersRounter);
routes.use('/sessions', sessionsRouter);

export default routes;
