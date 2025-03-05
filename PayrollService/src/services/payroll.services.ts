// payroll-service/src/services/payrollService.ts
import { ObjectId } from 'mongodb';
import databaseService from '~/services/databases.services';
import Payroll, { PayrollInterface } from '~/models/schemas/payroll.schema';

class PayrollService {
  async getAllPayrolls(): Promise<PayrollInterface[]> {
    const payrolls = await databaseService.payrolls.find().toArray();
    return payrolls;
  }

  async getPayrollsByEmployeeId(employeeId: string, year: number): Promise<PayrollInterface | string> {
    const payroll = await databaseService.payrolls.findOne({
      employeeId: employeeId,
      year: year
    });

    return payroll || 'No payroll found';
  }

  async createPayroll(data: PayrollInterface): Promise<PayrollInterface> {
    const payroll = new Payroll(data);
    const result = await databaseService.payrolls.insertOne({
      ...payroll,
      department: payroll.department.toLowerCase()
    });
    payroll._id = result.insertedId;
    return payroll;
  }

  async getTotalEarningByDepartment(department: string, year: number): Promise<number> {
    const total = await databaseService.payrolls
      .aggregate([
        {
          $match: { department: department, year: year }
        },
        {
          $group: {
            _id: null,
            totalEarnings: { $sum: '$earnings' }
          }
        }
      ])
      .toArray();
    return total.length > 0 ? total[0].totalEarnings : 0;
  }
}

export default new PayrollService();
