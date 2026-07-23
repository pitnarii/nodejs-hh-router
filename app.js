import express from "express";
import bodyParser from "body-parser";
import accountRouter from "./routes/account.mjs";
import assignmentRouter from "./routes/assignments.mjs";



const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/accounts", accountRouter)
app.use("/assignments", assignmentRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
