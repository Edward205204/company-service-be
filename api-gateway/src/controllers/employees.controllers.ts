import { Request, Response } from 'express';
import { EmployeeSchema } from '~/models/schemas/employeesGW.schema';
import { PayrollSchema } from '~/models/schemas/payrollsGW.schemas';
import {
  addNewEmployee,
  getEmployees,
  getEmployeeById,
  getEmployeesByDepartment,
  getDepartmentList
} from '~/utils/employees.axios';
import {
  addPayroll,
  getPayrolls,
  getPayrollById,
  getPayrollByDepartment,
  getTotalPayrollsByDepartment
} from '~/utils/payroll.axios';

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
    const { department: tempDepartment, year } = req.params;
    const department = tempDepartment.toLowerCase();
    const employees: EmployeeSchema[] = await getEmployeesByDepartment(department);
    const payrolls: PayrollSchema[] = await getPayrollByDepartment(department, year);
    const employeesWithPayrolls = [];

    for (const employee of employees) {
      const payroll = payrolls.find((p) => p.employeeId === employee._id);
      if (payroll) employeesWithPayrolls.push({ ...employee, earnings: payroll.earnings, year: payroll.year });
    }
    res.json(employeesWithPayrolls);
  }

  async getTotalEarningByDepartment(req: Request, res: Response) {
    const { department: tempDepartment, year } = req.params;
    const department = tempDepartment.toLowerCase();
    const payroll = await getTotalPayrollsByDepartment(department, year);
    res.json({ department: department, year: year, totalEarnings: payroll.totalEarnings });
  }

  async getDepartmentList(req: Request, res: Response) {
    const departmentList = await getDepartmentList();
    res.json(departmentList);
  }
}

export default new EmployeeController();
