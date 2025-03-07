import { NextFunction, Request, Response, Router } from 'express';
import employeeController from '~/controllers/employee.controllers';
import employeeMiddlewares from '~/middlewares/employee.middlewares';
import Employee from '~/models/schemas/employees.schema';

const router = Router();

router.get('/', employeeController.getAllEmployees);
router.get(
  '/department/:department',
  employeeMiddlewares.departmentEmployee,
  employeeController.getEmployeesByDepartment
);
router.get('/ethnicity/:ethnicity', employeeMiddlewares.ethnicityEmployee, employeeController.getEmployeeByEthnicity);
router.get('/:id', employeeMiddlewares.employeeId, employeeController.getEmployeeById);

router.post('/', employeeController.createEmployee);
router.put('/:id', employeeMiddlewares.employeeId, employeeController.updateEmployee);

router.get('/department-list', employeeController.getDepartmentList);
export default router;
