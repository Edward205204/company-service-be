import { ObjectId } from 'mongodb';

export interface EmployeeSchema {
  _id?: ObjectId;
  name: string;
  gender: string;
  ethnicity: string;
  department: string;
  employmentType: string;
  hireDate: Date;
  birthday: Date;
  vacationDaysAccumulated: number;
  vacationDaysTaken: number;
  benefitPlan: string;
}
