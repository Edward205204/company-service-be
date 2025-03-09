import { Router } from 'express';
import payrollController from '~/controllers/payroll.controllers';
import payrollsMiddlewares from '~/middlewares/payrolls.middlewares';

const router = Router();

// router.post('/', payrollController.createPayroll);
router.get('/', payrollController.getAllPayrolls);

router.get('/:employeeId', payrollsMiddlewares.empIdValidation, payrollController.getPayrollsByEmployeeId);
router.get(
  '/department/:department',
  payrollsMiddlewares.departmentValidation,
  payrollController.getEarningsByDepartment
);
router.get(
  '/total-department-earning/:department',
  payrollsMiddlewares.departmentValidation,
  payrollController.getTotalEarningByDepartment
);

export default router;
