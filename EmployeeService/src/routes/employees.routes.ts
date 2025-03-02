import { Router } from 'express';
import employeeController from '~/controllers/employee.controllers';

const router = Router();

router.get('/', employeeController.getAllEmployees);
router.get('/department/:department', employeeController.getEmployeesByDepartment);
router.get('/:id', employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);

export default router;
