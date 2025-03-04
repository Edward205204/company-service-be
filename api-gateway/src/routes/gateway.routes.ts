import { Router } from 'express';
import EmployeeController from '~/controllers/employees.controllers';

const router = Router();

router.post('/', EmployeeController.createEmployee);
router.get('/', EmployeeController.getEmployee);
router.get('/:id/:year', EmployeeController.getEmployeeAndPayrollById);
router.get('/:department/:year', EmployeeController.getEmployeesAndPayrollsByDepartment);
export default router;
