import { Router } from 'express';
import payrollController from '~/controllers/payroll.controllers';

const router = Router();

router.get('/', payrollController.getALlPayrolls);
router.post('/', payrollController.createPayroll);
router.get('/:employeeId/:year', payrollController.getPayrollsByEmployeeId);
router.get('/department/:department/:year', payrollController.getEarningsByDepartment);
router.get('/total-department-earning/:department/:year', payrollController.getTotalEarningByDepartment);

export default router;
