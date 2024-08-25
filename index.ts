import http from 'node:http';

process.loadEnvFile('./development.env');

const SERVER_HOST = process.env.SERVER_HOST || '127.0.0.1';
const SERVER_PORT = Number(process.env.SERVER_PORT || 3000);

const server = http.createServer();

server.on('request', (request, response) => {
  const method = request.method;
  const path = request.url;
  let statusCode = 404;

  if (method === 'GET' && path === '/') {
    statusCode = 200;
  }

  response.writeHead(statusCode, { 'Content-Type': 'text/plain' });
  response.end(JSON.stringify(http.STATUS_CODES[statusCode]));
});

server.on('listening', () => {
  console.info(`Server listening on ${SERVER_HOST}:${SERVER_PORT}`);
});

server.listen(SERVER_PORT, SERVER_HOST);
