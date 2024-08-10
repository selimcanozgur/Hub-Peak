import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

const getAllUser = catchAsync(async function (req, res, next) {
  const users = await User.find();
  res.status(200).json({
    size: users.length,
    users,
  });
});

export { getAllUser };
