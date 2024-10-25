import jwt, { decode } from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No estas autorizado",
    });
  }
  //console.log(req.cookies);

  jwt.verify(token, "mysecret123", (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: "No estas autorizado",
      });
    console.log(decoded);

    req.userId = decoded.id;
    next();
  });
};
