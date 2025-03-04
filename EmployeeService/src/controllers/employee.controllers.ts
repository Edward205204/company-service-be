import { Request, Response } from 'express';
import employeeService from '~/services/employee.services';

class EmployeeController {
  async getAllEmployees(req: Request, res: Response) {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
  }

  async getEmployeesByDepartment(req: Request, res: Response) {
    let { department } = req.params;
    department = department.slice(1);
    console.log(department);
    const employees = await employeeService.getEmployeesByDepartment(department);
    res.json(employees);
  }

  async getEmployeeById(req: Request, res: Response) {
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

  async updateEmployee(req: Request, res: Response) {
    const employee = await employeeService.updateEmployee(req.params.id, req.body);
    if (!employee) {
      res.status(404).json({ message: 'Employee not found' });
      return;
    }
    res.json(employee);
  }
}

export default new EmployeeController();
