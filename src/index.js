import connectDB from "./db/index.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dotenv = require("dotenv");

dotenv.config();

connectDB();
