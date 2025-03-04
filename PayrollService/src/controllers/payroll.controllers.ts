// payroll-service/src/controllers/payrollController.ts
import { Request, Response } from 'express';
import payrollService from '~/services/payroll.services';

class PayrollController {
  async getALlPayrolls(req: Request, res: Response) {
    const payrolls = await payrollService.getAllPayrolls();
    res.json(payrolls);
  }

  async getPayrollsByEmployeeId(req: Request, res: Response) {
    const { employeeId: tempId, year: tempYear } = req.params;
    const year = parseInt(tempYear.slice(1));
    const employeeId = tempId.slice(1);
    console.log(employeeId, year);
    const payrolls = await payrollService.getPayrollsByEmployeeId(employeeId, year);
    res.json(payrolls);
  }

  async createPayroll(req: Request, res: Response) {
    const payroll = await payrollService.createPayroll(req.body);
    res.status(201).json(payroll);
  }

  async getDepartmentEarnings(req: Request, res: Response) {
    const { department, year } = req.params;
    const totalEarnings = await payrollService.getDepartmentEarnings(department, parseInt(year));
    res.json({ department, year, totalEarnings });
  }
}

export default new PayrollController();
