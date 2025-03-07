import { NextFunction, Request, Response } from 'express';

class EmployeeMiddleware {
  departmentEmployee = (req: Request, res: Response, next: NextFunction) => {
    let department = req.params.department;
    if (department.startsWith(':')) {
      department = department.slice(1);
    }
    department = department.toLowerCase();
    req.params.department = department;
    next();
  };
  employeeId = (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    if (id.startsWith(':')) {
      id = id.slice(1);
    }
    req.params.id = id;
    next();
  };

  ethnicityEmployee = (req: Request, res: Response, next: NextFunction) => {
    let ethnicity = req.params.ethnicity;
    if (ethnicity.startsWith(':')) {
      ethnicity = ethnicity.slice(1);
    }
    ethnicity = ethnicity.toLowerCase();
    req.params.ethnicity = ethnicity;
    next();
  };
}

export default new EmployeeMiddleware();
