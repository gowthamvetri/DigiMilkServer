import express from 'express'
import { fetchMilkInfo, login, register } from '../controller/user.controller.js';

const userRout = express.Router();

userRout.post('/register',register);
userRout.post('/login',login);
userRout.post('/minkInfo',fetchMilkInfo)

export default userRout