// payroll-service/src/controllers/payrollController.ts
import { Request, Response } from 'express';
import { PayrollInterface } from '~/models/schemas/payroll.schema';
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

  async getTotalEarningByDepartment(req: Request, res: Response) {
    const { department: tempDepartment, year: tempYear } = req.params;
    const department = tempDepartment.slice(1);
    const year = parseInt(tempYear.slice(1));
    const totalEarnings = await payrollService.getTotalEarningByDepartment(department, year);

    res.json({ department, year, totalEarnings });
  }

  async getEarningsByDepartment(req: Request, res: Response) {
    const { department: tempDepartment, year: tempYear } = req.params;
    const department = tempDepartment.slice(1);
    const year = parseInt(tempYear.slice(1));
    const earningList: PayrollInterface[] = await payrollService.getEaringByDepartment(department, year);

    res.json(earningList);
  }
}

export default new PayrollController();
