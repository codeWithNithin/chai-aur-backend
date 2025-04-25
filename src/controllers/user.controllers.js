import ApiResponse from "../utils/apiResponse";
import asyncHandler from "../utils/asyncHandler.utils";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, "User registered successfully"));
});

export { registerUser };