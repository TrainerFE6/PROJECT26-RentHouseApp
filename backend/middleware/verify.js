import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("Verifying token...");
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    console.log("No authorization header");
    return res.sendStatus(401); // Unauthorized
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("No token provided");
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("Failed to verify token", err);
      return res.sendStatus(403); // Forbidden
    }

    req.user = decoded;
    console.log("Token verified:", req.user);
    next();
  });
};
