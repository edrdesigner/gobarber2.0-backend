import { Router } from 'express';
import appointmentsRounter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRounter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRounter);
routes.use('/users', usersRounter);
routes.use('/sessions', sessionsRouter);

export default routes;
