import winston from 'winston';
import expressWiston from 'express-winston';

const defaultConfig = {
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
};

export const logger = winston.createLogger({
  ...defaultConfig,

});

export const requestLogger = expressWiston.logger({
  ...defaultConfig,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: true,
});

export default logger;
