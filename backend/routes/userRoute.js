import express, { Router } from "express";
import { Login, Signup } from "../controller/userController.js";
const UserRoute = Router();

UserRoute.post("/login", Login);
UserRoute.post("/signup", Signup);

export default UserRoute;
