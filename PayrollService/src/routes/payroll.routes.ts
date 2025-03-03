import { Router } from 'express';
import payrollController from '~/controllers/payroll.controllers';

const router = Router();

router.post('/', payrollController.createPayroll);
router.get('/getPayrollsByEmployeeId/:employeeId/:year', payrollController.getPayrollsByEmployeeId);
router.get('/getDepartmentEarnings/:department/:year', payrollController.getDepartmentEarnings);

export default router;
