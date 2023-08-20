import { logger } from '../shared';

export const getErrorMessage = (error) => {
  if (error.stack) {
    return error.stack;
  }

  if (typeof error.toString === 'function') {
    return error.toString();
  }

  return '';
};

export const logErrorMessage = (error) => {
  logger.error(error);
};

const isErrorStatusCode = (statusCode) => {
  return statusCode >= 400 && statusCode < 600;
};

export const getHttpStatusCode = ({ error, response }) => {
  const statusCodeFromError = error.status || error.statusCode;

  if (isErrorStatusCode(statusCodeFromError)) {
    return statusCodeFromError;
  }

  const statusCodeFromResponse = response.statusCode;

  if (isErrorStatusCode(statusCodeFromResponse)) {
    return statusCodeFromResponse;
  }

  return 500;
};
