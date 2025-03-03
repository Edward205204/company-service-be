import { Request, Response } from 'express';
import { EmployeeSchema } from '~/models/schemas/employeesGW.schema';
import { PayrollSchema } from '~/models/schemas/payrollsGW.schemas';
import { addNewEmployee, addPayroll } from '~/utils/employees.axios';

class EmployeeController {
  async createEmployee(req: Request, res: Response) {
    const employee = req.body;
    const employeeAttribute: EmployeeSchema = { ...employee };
    const empRes = await addNewEmployee(employeeAttribute);
    const payrollRes: PayrollSchema = await addPayroll({
      employeeId: empRes._id,
      earnings: employee.earnings,
      department: employee.department
    });
    res.status(200).json({ ...empRes, ...payrollRes });
  }
}

export default new EmployeeController();
