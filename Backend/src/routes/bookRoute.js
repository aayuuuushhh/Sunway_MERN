// bookRoute.js
import { Router } from "express";
import { 
  createBook, 
  deleteBook, 
  updateBookController, 
  getBook, 
  getBookById 
} from "../controllers/bookController.js";

const bookRoute = Router();

bookRoute.route("/")
  .post(createBook)
  .get(getBook);

bookRoute.route("/:id")
  .get(getBookById)
  .patch(updateBookController)
  .delete(deleteBook);

export default bookRoute;