// payroll-service/src/controllers/payrollController.ts
import { Request, Response } from 'express';
import { PayrollInterface } from '~/models/schemas/payroll.schema';
import payrollService from '~/services/payroll.services';

class PayrollController {
  async getAllPayrolls(req: Request, res: Response) {
    const payrolls = await payrollService.getAllPayrolls();
    res.json(payrolls);
  }

  async getPayrollsByEmployeeId(req: Request, res: Response) {
    const { employeeId } = req.params;
    const payrolls = await payrollService.getPayrollsByEmployeeId(employeeId);
    res.json(payrolls);
  }

  // async createPayroll(req: Request, res: Response) {
  //   const payroll = await payrollService.createPayroll(req.body);
  //   res.status(201).json(payroll);
  // }

  async getTotalEarningByDepartment(req: Request, res: Response) {
    const { department } = req.params;
    const totalEarnings = await payrollService.getTotalEarningByDepartment(department);

    res.json({ department, totalEarnings });
  }

  async getEarningsByDepartment(req: Request, res: Response) {
    const { department } = req.params;
    const earningList: PayrollInterface[] = await payrollService.getEaringByDepartment(department);

    res.json(earningList);
  }
}

export default new PayrollController();
