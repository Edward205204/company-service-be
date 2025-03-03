import { MongoClient, Db, Collection } from 'mongodb';
// import dotenv from 'dotenv';
import dotenv from 'dotenv';
import Employee from '~/models/schemas/payroll.schema';

dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@payrollservice.3yj2q.mongodb.net/?retryWrites=true&w=majority&appName=PayrollService`;

class DatabaseService {
  private client: MongoClient;
  private db: Db;

  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db(process.env.DB_NAME as string);
  }

  async connect() {
    try {
      await this.client.connect();
      await this.db.command({ ping: 1 });
      console.log('Connected to employeeDB');
    } catch (error) {
      console.error('Database connection error:', error);
      await this.client.close();
      throw error;
    }
  }

  get payrolls(): Collection<Employee> {
    return this.db.collection(process.env.DB_USER_COLLECTION as string);
  }
}

const databaseService = new DatabaseService();
export default databaseService;

databaseService.connect().catch((err) => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
