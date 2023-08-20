import { addColors, createLogger, format, transports } from 'winston';

const { combine, printf, timestamp, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const loggerFormatOptions = combine(
  colorize({ all: true }),
  timestamp({ format: 'YYYY-MM-DD hh:mm:ss.sssZ' }),
  logFormat
);

addColors({
  info: 'bold blue',
  warn: 'italic yellow',
  error: 'bold red',
  debug: 'green',
});

export const logger = createLogger({
  format: loggerFormatOptions,
  transports: [new transports.Console({ level: 'debug' })],
});
