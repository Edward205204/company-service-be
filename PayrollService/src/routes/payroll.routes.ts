import { Router } from 'express';
import payrollController from '~/controllers/payroll.controllers';

const router = Router();

router.get('/', payrollController.getALlPayrolls);
router.post('/', payrollController.createPayroll);
router.get('/:employeeId/:year', payrollController.getPayrollsByEmployeeId);
router.get('/getDepartmentEarnings/:department/:year', payrollController.getDepartmentEarnings);

export default router;
