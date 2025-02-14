import { userService } from "../services/userService.js"

export const userController = {
    updateUser: async (req, res, next) => {
        try {
            console.log("Req.user", (req.user))
            const { id } = req.params;
            const user = await userService.editUser(id, req.body);
            res.status(200).json({ status: true, message: "User Updated Successfully", user })
        } catch (error) {
            next(error)
        }
    },
    selfUpdate: async (req, res, next) => {
        try {
            const { _id } = req.user;
            const user = await userService.editUser(_id, req.body);
            res.status(200).json({ status: true, message: "User Updated Successfully", user })
        } catch (error) {
            next(error)
        }
    }

}