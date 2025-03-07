import { Router } from 'express';
import payrollController from '~/controllers/payroll.controllers';
import payrollsMiddlewares from '~/middlewares/payrolls.middlewares';

const router = Router();

router.get('/:year', payrollsMiddlewares.yearValidation, payrollController.getALlPayrolls);
router.post('/', payrollController.createPayroll);
router.get(
  '/:employeeId/:year',
  payrollsMiddlewares.empIdValidation,
  payrollsMiddlewares.yearValidation,
  payrollController.getPayrollsByEmployeeId
);
router.get(
  '/department/:department/:year',
  payrollsMiddlewares.yearValidation,
  payrollsMiddlewares.departmentValidation,
  payrollController.getEarningsByDepartment
);
router.get(
  '/total-department-earning/:department/:year',
  payrollsMiddlewares.departmentValidation,
  payrollsMiddlewares.yearValidation,
  payrollController.getTotalEarningByDepartment
);

export default router;
