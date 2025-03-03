import axios from 'axios';
import { path } from '~/constants/path';
import { EmployeeSchema } from '~/models/schemas/employeesGW.schema';
import { PayrollSchema } from '~/models/schemas/payrollsGW.schemas';

// endpoint của thêm nhân viên mới http://localhost:3000/employees
export const addNewEmployee = async (data: EmployeeSchema) => {
  const response = await axios.post(`${path.employees}/employees`, data);
  return response.data;
};

export const addPayroll = async (data: PayrollSchema) => {
  const response = await axios.post(`${path.payroll}/payrolls`, data);
  return response.data;
};
