import { User } from "../models/userModel.js";

export const userService = {
    editUser: async (id, user) => {
        try {
            // find the user by id and update the user
            const user1 = await User.findOne({ _id: id });
            if (!user1) {
                throw new Error("User not Found");
            } else {
                user1.name = user.name || user1.name;
                user1.email = user.email || user1.email;
                user1.mobile = user.mobile || user1.mobile;
                user1.password = user.password || user1.password;

                await user1.save(); // pre method will work here on save and update
                return user1;
            }
            // return await User.findByIdAndUpdate({ _id: id }, user, { new: true }) // simple one
        } catch (error) {
            throw new Error(error.message)
        }
    }
}