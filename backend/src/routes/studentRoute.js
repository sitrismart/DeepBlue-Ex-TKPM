import express from "express";
import multer from 'multer';

import studentController from "../controllers/studentController";
import validateRegistration from "../middlewares/emailDomainValidate";
import uploadFileMiddleware from "../middlewares/uploadFile";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage:storage });


router.get("/", studentController.getAllStudents);
router.post("/", validateRegistration, studentController.createStudent);
router.post("/delete-student", studentController.deleteStudent);
router.post("/update-student", studentController.updateStudent);
router.post("/upload",upload.single('file'), uploadFileMiddleware);
module.exports = router;