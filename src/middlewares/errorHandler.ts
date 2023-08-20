import { getErrorMessage, getHttpStatusCode, logErrorMessage } from './utils';

const NODE_ENV = process.env.NODE_ENV || 'development';

export const errorHandler = (error, request, response, next) => {
  const errorMessage = getErrorMessage(error);

  logErrorMessage(errorMessage);

  if (response.headersSent) {
    return next(error);
  }

  const errorResponse = {
    statusCode: getHttpStatusCode({ error, response }),
    body: undefined,
  };

  if (NODE_ENV !== 'production') {
    errorResponse.body = errorMessage;
  }

  response.status(errorResponse.statusCode);

  response.format({
    'application/json': () => {
      response.json({ message: errorResponse.body });
    },
    default: () => {
      response.type('text/plain').send(errorResponse.body);
    },
  });

  next();
};
