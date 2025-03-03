import express from 'express';
import payrollRoutes from '~/routes/payroll.routes';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/payrolls', payrollRoutes);

app.listen(PORT, () => {
  console.log(`Payroll Service is running on port ${PORT}`);
});
