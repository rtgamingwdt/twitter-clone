import express from "express";
import { PORT } from "./utils/config";
const app = express();

app.listen(PORT, () => {
  console.log("Twizzle Backend Listening On Port: " + PORT);
});