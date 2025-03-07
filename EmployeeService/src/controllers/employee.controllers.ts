import { Request, Response } from 'express';
import employeeService from '~/services/employee.services';

class EmployeeController {
  async getAllEmployees(req: Request, res: Response) {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
  }

  async getEmployeesByDepartment(req: Request, res: Response) {
    const { department } = req.params;
    const employees = await employeeService.getEmployeesByDepartment(department);
    res.json(employees);
  }

  async getEmployeeById(req: Request, res: Response) {
    console.log(req.params.id);
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.json(employee);
  }

  async createEmployee(req: Request, res: Response) {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  }

  async getDepartmentList(req: Request, res: Response) {
    const departments = await employeeService.getDepartmentList();
    res.json(departments);
  }

  async updateEmployee(req: Request, res: Response) {
    const employee = await employeeService.updateEmployee(req.params.id, req.body);
    if (!employee) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.json(employee);
  }

  async getEmployeeByEthnicity(req: Request, res: Response) {
    const { ethnicity } = req.params;

    const employees = await employeeService.getEmployeeByEthnicity(ethnicity);
    res.json(employees);
  }
}

export default new EmployeeController();
