import { Router } from "express";
import {
  createCollege,
  getCollege,
  getCollegeById,
  updateCollegeController,
  deleteCollege,
} from "../controllers/collegeController.js";

const collegeRoute = Router();

collegeRoute
  .route("/")
  .post(createCollege)
  .get(getCollege);

collegeRoute
  .route("/:id")
  .get(getCollegeById)
  .patch(updateCollegeController)
  .put(updateCollegeController) 
  .delete(deleteCollege);

export default collegeRoute;