const express = require("express");
const router = express.Router();

const TNCUserController = require("../controllers/TncUser.controller");

// routes
router.get(
    "/sendEmailUser",
    TNCUserController.sendEmailUser
); // R

router.post(
    "/sendPasswordandURLCheck",
    TNCUserController.sendPasswordandURLCheck
); // R

router.post(
    "/passwordCheck",
    TNCUserController.passwordCheck
);

router.post(
    "/savePdf",
    TNCUserController.savePdf
);


module.exports = router;

