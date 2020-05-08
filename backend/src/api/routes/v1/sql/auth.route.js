const express = require("express");
const authController = require("../../../controllers/sql/auth.pg.controller");

const router = express.Router();

router.route("/addUser").post(authController.addUser);
router.route("/getAllUsers").get(authController.getAllUsers);
router.route("/getUserById/:uuid").get(authController.getUserById);
router.route("/editUser").post(authController.editUser);
router.route("/deleteUser/:uuid").delete(authController.deleteUser);



module.exports = router;
