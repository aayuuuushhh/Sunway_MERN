import "dotenv/config";
import express from "express";
import firstRouter from "./src/routes/firstRoute.js";
import nameRouter from "./src/routes/nameRouter.js";
import adminRouter from "./src/routes/adminRoute.js";
import connectToDb from "./src/connectToDb/connectToDb.js";
import productRouter from "./src/routes/productRouter.js";
import bookRoute from "./src/routes/bookRoute.js";
import collegeRoute from "./src/routes/collegeRoute.js";
import addressRoute from "./src/routes/addressRoute.js";

// express app
let app = express();


const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`Port is running at ${PORT}`);
  await connectToDb();
});

app.use(express.json());


app.use("/name", nameRouter);
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/book", bookRoute);
app.use("/college", collegeRoute);
app.use("/address", addressRoute);
app.use("/", firstRouter);