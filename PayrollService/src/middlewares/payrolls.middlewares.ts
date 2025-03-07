import { NextFunction, Request, Response } from 'express';

class PayrollMiddleware {
  yearValidation(req: Request, res: Response, next: NextFunction) {
    let { year } = req.params;

    if (year.startsWith(':')) {
      year = year.slice(1);
    }

    if (year) {
      year = new Date().getFullYear().toString();
      console.log('year', year);
    }

    req.params.year = year;
    next();
  }
  empIdValidation(req: Request, res: Response, next: NextFunction) {
    let { employeeId } = req.params;
    if (employeeId.startsWith(':')) {
      employeeId = employeeId.slice(1);
    }
    req.params.employeeId = employeeId;
    next();
  }
  departmentValidation(req: Request, res: Response, next: NextFunction) {
    let { department } = req.params;
    if (department.startsWith(':')) {
      department = department.slice(1);
    }
    department = department.toLowerCase();
    req.params.department = department;
    next();
  }
}

export default new PayrollMiddleware();
