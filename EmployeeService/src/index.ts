import express from 'express';
import employeeRoutes from '~/routes/employees.routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Employee Service is running on port ${PORT}`);
});
