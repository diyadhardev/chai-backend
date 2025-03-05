import connectDB from "./db/index.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dotenv = require("dotenv");

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!!", err);
  });
