const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://cardapi.top/api',  // Замените на адрес вашего сервера разработки
      changeOrigin: true,
    })
  );
};