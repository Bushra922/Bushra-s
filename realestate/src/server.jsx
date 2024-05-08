import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Enable CORS for all routes
app.use(cors());

// Set up proxy for '/users'
app.use(
  '/users',
  createProxyMiddleware({
    target: 'http://localhost:5050',
    changeOrigin: true,
  })
);

// Other server setup code...

// Start the server
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
