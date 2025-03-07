// payroll-service/src/controllers/payrollController.ts
import { Request, Response } from 'express';
import { PayrollInterface } from '~/models/schemas/payroll.schema';
import payrollService from '~/services/payroll.services';

class PayrollController {
  async getALlPayrolls(req: Request, res: Response) {
    const { year: tempYear } = req.params;
    const year = parseInt(tempYear);
    const payrolls = await payrollService.getAllPayrolls(year);
    res.json(payrolls);
  }

  async getPayrollsByEmployeeId(req: Request, res: Response) {
    const { employeeId, year: tempYear } = req.params;
    // const year = parseInt(tempYear.slice(1));
    const year = parseInt(tempYear);
    console.log(employeeId, year);
    const payrolls = await payrollService.getPayrollsByEmployeeId(employeeId, year);
    res.json(payrolls);
  }

  async createPayroll(req: Request, res: Response) {
    const payroll = await payrollService.createPayroll(req.body);
    res.status(201).json(payroll);
  }

  async getTotalEarningByDepartment(req: Request, res: Response) {
    const { department, year: tempYear } = req.params;
    // const department = tempDepartment.slice(1);
    const year = parseInt(tempYear);
    const totalEarnings = await payrollService.getTotalEarningByDepartment(department, year);

    res.json({ department, year, totalEarnings });
  }

  async getEarningsByDepartment(req: Request, res: Response) {
    const { department, year: tempYear } = req.params;
    // const department = tempDepartment.slice(1);
    const year = parseInt(tempYear);
    const earningList: PayrollInterface[] = await payrollService.getEaringByDepartment(department, year);

    res.json(earningList);
  }
}

export default new PayrollController();
