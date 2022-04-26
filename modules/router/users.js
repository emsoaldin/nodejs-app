const { authJwt } = require('../middleware');
const controller = require('../controllers/user');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/api/access/all', controller.publicBoard);

  app.get('/api/access/member', [authJwt.verifyToken], controller.memberBoard);

  app.get(
    '/api/access/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.patch(
    '/api/users/:userId',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateRole
  );
};
