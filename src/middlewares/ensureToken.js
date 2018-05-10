const jwt = require('jsonwebtoken');
process.env.SECRET_KEY = 'DespairProyect';

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearedToken = bearer[0];
    req.token = bearedToken;
    jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

module.exports = {ensureToken};
