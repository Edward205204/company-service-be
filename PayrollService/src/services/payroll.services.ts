// payroll-service/src/services/payrollService.ts
import { ObjectId } from 'mongodb';
import databaseService from '~/services/databases.services';
import Payroll, { PayrollInterface } from '~/models/schemas/payroll.schema';

class PayrollService {
  async getPayrollsByEmployeeId(employeeId: string, year: number): Promise<number | string> {
    // return await databaseService.payrolls.find({ employeeId: new ObjectId(employeeId) }).toArray();
    const payroll = await databaseService.payrolls.findOne({
      employeeId: new ObjectId(employeeId),
      year: year
    });

    return payroll?.earnings || 'No payroll found';
  }

  async createPayroll(data: PayrollInterface): Promise<PayrollInterface> {
    const payroll = new Payroll(data);
    const result = await databaseService.payrolls.insertOne(payroll);
    payroll._id = result.insertedId;
    return payroll;
  }

  async getDepartmentEarnings(department: string, year: number): Promise<number> {
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
