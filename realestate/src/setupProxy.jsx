const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/users', // specify the route you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5050/users', // specify the target server
      changeOrigin: true,
    })
  );
};
