import { Router } from "express";
import {
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter
  .route("/")
  .post(createAdmin)
  .get(getAdmin);


adminRouter
  .route("/:id")
  .get(getAdminById)
  .patch(updateAdmin)
  .delete(deleteAdmin);

export default adminRouter;