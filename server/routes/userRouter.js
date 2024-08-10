import express from "express";
import {
  login,
  signup,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetail,
  updatePassword,
  updateProfile,
  getAllUsers,
  getOneUser,
  updateRole,
  deleteUser,
} from "../controllers/authController.js";

import { isAuthenticatedUser, authorizeRoles } from "../utils/auth.js";

const Router = express.Router();

Router.post("/signup", signup);
Router.post("/login", login);
Router.post("/password/forgot", forgotPassword);
Router.get("/logout", logout);
Router.put("/password/reset/:token", resetPassword);

// -- User --
Router.put("/update/profile", updateProfile);
Router.put("/update/password", updatePassword);
Router.get("/me", getUserDetail);

Router.route("/admin").get(getAllUsers);

// -- Admin --
Router.route("/admin/:id").get(getOneUser).put(updateRole).delete(deleteUser);
export default Router;
