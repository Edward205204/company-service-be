import express from 'express';
import apiRoutes from '~/routes/gateway.routes';
const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});

// app.use('/employees', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
// app.use('/payroll', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
// app.use('/notifications', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
