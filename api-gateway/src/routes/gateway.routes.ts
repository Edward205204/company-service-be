import { Router } from 'express';
import EmployeeController from '~/controllers/addEmployee.controllers';

const router = Router();

router.post('/', EmployeeController.createEmployee);

export default router;
