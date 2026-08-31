import { Router } from "express";
import {
  createAddress,
  getAddresses,
  getAddressById,
  updateAddressController,
  deleteAddress,
} from "../controllers/addressController.js";

const addressRoute = Router();

addressRoute
  .route("/")
  .post(createAddress)
  .get(getAddresses);

addressRoute
  .route("/:id")
  .get(getAddressById)
  .patch(updateAddressController)
  .put(updateAddressController)
  .delete(deleteAddress);

export default addressRoute;