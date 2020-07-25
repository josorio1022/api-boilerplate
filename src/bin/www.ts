import { createServer } from 'http';

import logger from '../lib/logger';
import app from '../config/app';

// server port
const port = process.env.PORT || '3000';

// create HTTP server.
const server = createServer(app);

// custom interface for server error event
interface ErrorEvent {
  syscall: string
  code: string
}

// on error event handler
const onError = (error: ErrorEvent) => {
  if (error.syscall !== 'listen') throw error;

  // Handle specific listen errors
  switch (error.code) {
    case 'EACCES':
      logger.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// on listening event handler
const onListening = () => {
  logger.info(`Listening on port ${port}`);
};

// event listeners
server.on('error', onError);
server.on('listening', onListening);
// init server in port
server.listen(port);
