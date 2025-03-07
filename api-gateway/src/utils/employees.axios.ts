import axios from 'axios';
import { path } from '~/constants/path';
import { EmployeeSchema } from '~/models/schemas/employeesGW.schema';

export const getEmployees = async () => {
  const response = await axios.get(`${path.employees}/employees`);
  return response.data;
};

export const addNewEmployee = async (data: EmployeeSchema) => {
  const response = await axios.post(`${path.employees}/employees`, data);
  return response.data;
};

export const getEmployeeById = async (id: string) => {
  const response = await axios.get(`${path.employees}/employees/${id}`);
  return response.data;
};

export const getEmployeesByDepartment = async (department: string) => {
  const response = await axios.get(`${path.employees}/employees/department/${department}`);
  return response.data;
};

export const getDepartmentList = async () => {
  const response = await axios.get(`${path.payroll}/employees/department-list`);
  return response.data;
};
