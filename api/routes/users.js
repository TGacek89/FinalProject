import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});

router.get("/checkadmin/:id", verifyToken, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);
// router.delete("/:id", verifyToken);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
