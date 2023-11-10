const primeRoutes = require('./p_routes');

const constructorMethod = (app) => {
  app.use('/', primeRoutes);
  app.use('*', (req, res) => {
    res.status(404).json({error: 'Not found'})
  });
};

module.exports = constructorMethod;