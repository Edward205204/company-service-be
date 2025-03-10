import { ObjectId } from 'mongodb';
import databaseService from '~/services/databases.services';
import Employee from '~/models/schemas/employees.schema';

class EmployeeService {
  async getAllEmployees(): Promise<Employee[]> {
    return await databaseService.employees.find().toArray();
  }

  async getEmployeesByDepartment(department: string): Promise<Employee[]> {
    return await databaseService.employees.find({ department }).toArray();
  }

  async getEmployeeById(id: string): Promise<Employee | null> {
    return await databaseService.employees.findOne({ _id: new ObjectId(id) });
  }

  async getDepartmentList(): Promise<string[]> {
    return await databaseService.employees.distinct('department');
  }

  async createEmployee(data: Partial<Employee>): Promise<Employee> {
    const employee = new Employee(data);
    employee.department = employee.department.toLowerCase();
    const result = await databaseService.employees.insertOne(employee);
    employee._id = result.insertedId;
    return employee;
  }

  async updateEmployee(id: string, data: Partial<Employee>): Promise<Employee | null> {
    const employee = await databaseService.employees.findOne({ _id: new ObjectId(id) });
    const updateEmp = { ...employee, ...data };
    const result = await databaseService.employees.updateOne({ _id: new ObjectId(id) }, { $set: data });
    if (result.matchedCount === 0) return null;
    return await this.getEmployeeById(id);
  }

  async getEmployeeByEthnicity(ethnicity: string): Promise<Employee[]> {
    return await databaseService.employees.find({ ethnicity: ethnicity }).toArray();
  }
}

export default new EmployeeService();
