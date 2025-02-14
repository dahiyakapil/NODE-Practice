import { generateJWT } from "../config/jwtToken.js"
import { User } from "../models/userModel.js"

export const authService = {
    registerUser: async (user) => {
        try {
            const existingUser = await User.findOne({ email: user.email })
            console.log(existingUser)
            if (existingUser) {
                throw new Error("User Already Exists")
            }
            return await User.create(user)
        } catch (error) {
            throw new Error(error.message)
        }
    },

    loginUser: async (user) => {
        try {
            const existingUser = await User.findOne({ email: user.email });;
            console.log(existingUser)

            if (!existingUser) {
                throw new Error("User Not Found");

            } else {
                if (existingUser && (await existingUser.matchPassword(user.password))) {
                    const token = generateJWT({
                        _id: existingUser._id,
                        email: existingUser.email,
                        role: existingUser.roles
                    });
                    const user = { name: existingUser.name, email: existingUser.email, role: existingUser.role, token };

                    return user;
                } else {
                    throw new Error("Invalid Credentials")
                }
            }

        } catch (error) {
            throw new Error(error.message)
        }
    }
}