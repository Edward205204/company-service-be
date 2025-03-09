import { ObjectId } from 'mongodb';

export interface SalaryInterface {
  earnings: number; // thực lĩnh
  baseSalary: number; // lương cơ bản
  year: number;
  month: number;
  bonus: number; // thưởng
}

export interface PayrollInterface {
  _id?: ObjectId;
  employeeId: string;
  department: string;
  salaries: SalaryInterface[];
}

export default class Payroll {
  _id?: ObjectId;
  employeeId: string;
  department: string;
  salaries: {
    year: number;
    month: number;
    baseSalary: number;
    bonus: number;
    earnings: number;
  }[];

  constructor(data: PayrollInterface) {
    if (!data.employeeId) throw new Error('Employee ID is required');
    this._id = data._id;
    this.employeeId = data.employeeId;
    this.department = data.department;
    this.salaries = data.salaries || [];
  }

  addSalary(year: number, month: number, baseSalary: number, bonus: number) {
    const earnings = baseSalary + bonus;
    this.salaries.push({ year, month, baseSalary, bonus, earnings });
  }
}

// phải lấy theo tháng và năm -> mặc định lấy theo tháng và năm hiện tại(của tất cả nhân viên)
// lấy tổng thu nhập năm trước ->
// lấy tổng thu nhập tháng trước
// lấy tổng thu nhập của tháng hiện tại
// lấy tổng thu nhập của năm hiện tại
// lấy tổng thu nhập của năm trước
