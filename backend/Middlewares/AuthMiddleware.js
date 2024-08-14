const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
  const authHeader = res.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).send({ error: "Not authenticated" });
    return;
  }

  try {
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.currentUser = payload;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authenticated." });
    return;
  }

  next();
};

module.exports = AuthMiddleware;
