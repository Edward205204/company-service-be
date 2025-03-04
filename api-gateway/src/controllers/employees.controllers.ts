import { Request, Response } from 'express';
import { EmployeeSchema } from '~/models/schemas/employeesGW.schema';
import { PayrollSchema } from '~/models/schemas/payrollsGW.schemas';
import { addNewEmployee, getEmployees, getEmployeeById, getEmployeesByDepartment } from '~/utils/employees.axios';
import { addPayroll, getPayrolls, getPayrollById } from '~/utils/payroll.axios';

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
    res.status(200).json({ ...empRes, ...payrollRes, _id: empRes._id });
  }

  async getEmployee(req: Request, res: Response) {
    const employees: EmployeeSchema[] = await getEmployees();
    const payrolls: PayrollSchema[] = await getPayrolls();

    const employeesWithPayrolls = [];

    for (const employee of employees) {
      const payroll = payrolls.find((p) => p.employeeId === employee._id);
      employeesWithPayrolls.push({ ...employee, earnings: payroll?.earnings, year: payroll?.year });
    }

    res.json(employeesWithPayrolls);
  }

  async getEmployeeAndPayrollById(req: Request, res: Response) {
    const { id, year } = req.params;
    const employee: EmployeeSchema = await getEmployeeById(id);
    const payroll: PayrollSchema = await getPayrollById(id, year);
    res.json({ ...employee, earnings: payroll.earnings, year: payroll.year });
  }

  async getEmployeesAndPayrollsByDepartment(req: Request, res: Response) {
    const { department, year } = req.params;
    const employees: EmployeeSchema[] = await getEmployeesByDepartment(department);
    res.json(employees);
  }
}

export default new EmployeeController();
