import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentController'

const appointmentsRouter = Router();
const appointmentsControllers = new AppointmentsController

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsRepository.find();

//   return res.json(appointments);
// });

appointmentsRouter.post('/', appointmentsControllers.create);

export default appointmentsRouter;
