import jwt from "jsonwebtoken"

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization?.split(" ")[1];
        if (!token) {
            throw new Error("Token not attached to the header");
        } else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log("Decoded user in authMiddleware:", decoded);
            req.user = decoded;

            next()
        }
    } catch (error) {
        next(error)
    }
}

export const isAuthorized = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new Error("Your are not authorized to access this route");
        }
        next()
    }

}