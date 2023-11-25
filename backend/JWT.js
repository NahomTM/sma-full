const { sign, verify } = require('jsonwebtoken');

const createToken = (user) => {
  const accessToken = sign(
    { username: user.username, id: user.id },
    process.env.jwtsecret,
    { expiresIn: '30d' } // Set expiration date to 30 days
  );
  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.body.accessToken;
  console.log(accessToken);

  if (!accessToken) {
    return res.json({ error: "User not authenticated" });
  }

  try {
    const validToken = verify(accessToken, process.env.jwtsecret);
    if (validToken) {
      req.authenticated = true;
      req.username = validToken.username; // Store username from token in req.username
      console.log(req.username);
      return next();
    }
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.json({ error: "Token has expired" });
    }
    return res.json({ error: err.message });
  }
};

module.exports = {
  createToken,
  validateToken
};
