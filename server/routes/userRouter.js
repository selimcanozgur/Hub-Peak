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
Router.put("/update/profile", isAuthenticatedUser, updateProfile);
Router.put("/update/password", isAuthenticatedUser, updatePassword);
Router.get("/me", isAuthenticatedUser, getUserDetail);

Router.route("/admin").get(isAuthenticatedUser, getAllUsers);

// -- Admin --
Router.route("/admin/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getOneUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
export default Router;
