import { Router } from 'express';
import EmployeeController from '~/controllers/employees.controllers';

const router = Router();

router.post('/', EmployeeController.createEmployee);
router.get('/', EmployeeController.getEmployee);
router.get('/:id/:year', EmployeeController.getEmployeeAndPayrollById);
router.get('/get-by-department/:department/:year', EmployeeController.getEmployeesAndPayrollsByDepartment);
router.get('/get-total-by-department/:department/:year', EmployeeController.getTotalEarningByDepartment);
export default router;
