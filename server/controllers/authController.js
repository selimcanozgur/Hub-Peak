import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import apiError from "../utils/apiError.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const SendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

// Signup
const signup = catchAsync(async function (req, res, next) {
  const { name, email, password, image, role } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    image,
    role,
  });
  SendToken(user, 201, req, res);
});

// Login
const login = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new apiError("E-Posta ve şifreyi giriniz", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new apiError("Geçersiz e-posta veya şifre", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new apiError("Geçersiz e-posta veya şifre", 401));
  }
  SendToken(user, 200, req, res);
});

// Logout
const logout = catchAsync(async function (req, res, next) {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    status: true,
    message: "Çıkış yapıldı",
  });
});

// Forgot Password
const forgotPassword = catchAsync(async function (req, res, next) {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new apiError("Böyle bir kullanıcı bulunamadı", 404));
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  const resetPaswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n \n ${resetPaswordUrl} \n\n If you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Ecommerce password recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordToken = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new apiError(err.message, 500));
  }
});

// Reset Password
const resetPassword = catchAsync(async function (req, res, next) {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new apiError(
        "Parola sıfırlama belirteci geçersiz ya da süresi dolmuş",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new apiError("Şifreler eşleşmiyor", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  SendToken(user, 200, req, res);
});

// Get User Detail
const getUserDetail = catchAsync(async function (req, res, next) {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    user,
  });
});

// Update User Password

const updatePassword = catchAsync(async function (req, res, next) {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new apiError("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new apiError("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  SendToken(user, 200, req, res);
});

// Update User Profile

const updateProfile = catchAsync(async function (req, res, next) {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// -- Admin Get All Users
const getAllUsers = catchAsync(async function (req, res, next) {
  const user = await User.find();
  res.status(200).json({
    status: "success",
    user,
  });
});

// -- Admin Get One User
const getOneUser = catchAsync(async function (req, res, next) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new apiError("Böyle bir kullanıcı bulunamadı", 404));
  }
  res.status(200).json({
    status: "success",
    user,
  });
});

// --Admin Update Role
const updateRole = catchAsync(async function (req, res, next) {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

// --Admin Delete User
const deleteUser = catchAsync(async function (req, res, next) {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new apiError(`User does not exist with Id: ${req.params.id}`, 400)
    );
  }

  await user.remove;

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

export {
  signup,
  login,
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
};
