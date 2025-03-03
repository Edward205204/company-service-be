import { ObjectId } from 'mongodb';

export interface PayrollInterface {
  _id?: ObjectId;
  employeeId: ObjectId;
  earnings: number;
  department: string;
  year?: number;
}

export default class Payroll {
  _id?: ObjectId;
  employeeId: ObjectId;
  earnings: number;
  department: string;
  year?: number;

  constructor(data: PayrollInterface) {
    if (!data.employeeId) throw new Error('Employee ID is required');
    this._id = data._id;
    this.employeeId = data.employeeId;
    this.earnings = data.earnings || 0;
    this.department = data.department;
    this.year = data.year || new Date().getFullYear();
  }
}
