/*
Create a object first
Create a function inside object


*/

import { authService } from "../services/authService.js"

export const authController = {
    createUser: async (req, res, next) => {
        try {
            const user = await authService.registerUser(req.body);
            res.status(201).json({ status: true, message: "User created Succeesfully", user })
        } catch (error) {
            next(error) // will pass to the middleware
        }
    },

    loginUser: async (req, res, next) => {
        try {
            const user = await authService.loginUser(req.body);
            res.status(201).json({ status: true, message: "User log in Succeesfully", user })
        } catch (error) {
            next(error)
        }
    }
}