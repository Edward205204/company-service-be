import { ObjectId } from 'mongodb';

export interface PayrollSchema {
  _id?: ObjectId;
  employeeId: ObjectId;
  earnings: number;
  department: string;
  year?: number;
}
