// const jwt = require("jsonwebtoken");
// const config = require("../config/config");
// const { to, ReE, ReS } = require("../services/util.service");

// const validateToken = async (req, res, next) => {
//   let token;
//   let authHeader = req.header.Authorization || req.header.Authorization;
//   if (authHeader && authHeader.startsWith("Bearer")) {
//     token = authHeader.split(" ")[1];
//     jwt.verify(token, config.secret, (err, decoded) => {
//       if (err) {
//         return ReS(res, {
//           message: "user not authorized",
//         });
//         console.log(decoded);
//       }
//     });
//   }
// };

// module.exports = validateToken;
