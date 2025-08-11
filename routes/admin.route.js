import express from "express";
import { fetchUser, updateMilkInfo } from "../controller/admin.controller.js";

const adminRouter = express.Router();

adminRouter.post('/getUser',fetchUser);
adminRouter.put('/milkinfo',updateMilkInfo)

export default adminRouter;