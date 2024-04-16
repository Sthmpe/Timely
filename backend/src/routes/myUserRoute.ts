import express from "express";
import MyUserController from "../controllers/MyUserController";

/**
 * Express Router Configuration
 * 
 * Responsible for defining routes related to user operations.
 * 
 * @module routes/users
 */
const router = express.Router();

/**
 * POST /users
 * 
 * Route for creating a new user.
 * This route invokes the createCurrentUser method from the MyUserController.
 */
router.post("/", MyUserController.createCurrentUser);

export default router;