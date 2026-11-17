const adminAuth = (req, res, next) => {
  const token = "xyz";

  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("admin unauthorized");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz";

  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("user unauthorized");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
