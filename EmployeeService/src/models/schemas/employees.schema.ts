import { ObjectId } from 'mongodb';

export default class Employee {
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

  constructor(data: Partial<Employee>) {
    if (!data.name || !data.department) throw new Error('Name and department are required');
    this._id = data._id;
    this.name = data.name;
    this.gender = data.gender || '';
    this.ethnicity = data.ethnicity || '';
    this.department = data.department;
    this.employmentType = data.employmentType || 'full-time';
    this.hireDate = data.hireDate || new Date();
    this.birthday = data.birthday || new Date();
    this.vacationDaysAccumulated = data.vacationDaysAccumulated || 0;
    this.vacationDaysTaken = data.vacationDaysTaken || 0;
    this.benefitPlan = data.benefitPlan || '';
  }
}
