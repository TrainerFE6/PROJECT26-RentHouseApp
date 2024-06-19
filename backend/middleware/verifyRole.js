export const verifyRole = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      console.log("No user found in request");
      return res.sendStatus(403); // Forbidden
    }

    console.log(`Verifying role: required = ${role}, user = ${req.user.role}`);

    if (req.user.role !== role) {
      console.log("Role mismatch");
      return res.sendStatus(403); // Forbidden
    }

    next();
  };
};
