const wrongRequestsRouter = require('express').Router();
const NotFoundError = require('../errors/not-found-error');

wrongRequestsRouter.use('*', (req, res, next) => {
  next(new NotFoundError('Запрошенной страницы не существует'));
});

module.exports = wrongRequestsRouter;
