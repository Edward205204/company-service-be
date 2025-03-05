import axios from 'axios';
import { path } from '~/constants/path';
import { PayrollSchema } from '~/models/schemas/payrollsGW.schemas';

export const addPayroll = async (data: PayrollSchema) => {
  const response = await axios.post(`${path.payroll}/payrolls`, data);
  return response.data;
};

export const getPayrolls = async () => {
  const response = await axios.get(`${path.payroll}/payrolls`);
  return response.data;
};

export const getPayrollById = async (id: string, year: string) => {
  const response = await axios.get(`${path.payroll}/payrolls/${id}/${year}`);
  // http://localhost:3001/payrolls/:67c6caa90e1a802f5fff8088/:2025
  return response.data;
};

export const getTotalPayrollsByDepartment = async (department: string, year: string) => {
  const response = await axios.get(`${path.payroll}/payrolls/total-department-earning/${department}/${year}`);
  return response.data;
};
