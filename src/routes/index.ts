import { Router } from 'express';
import appointmentsRounter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRounter);

routes.post('/users', (request, response) => {
  const { email, name } = request.body;

  const user = {
    email,
    name,
  };

  response.json(user);
});

export default routes;
