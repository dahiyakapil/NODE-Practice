import express from "express"
const fileRouter = express.Router();
import multer from "multer"
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })



// without multer error

fileRouter.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file)
})

export default fileRouter;