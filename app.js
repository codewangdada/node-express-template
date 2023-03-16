const express = require("express");
const cors = require("cors");
const userRouter = require("./router/user");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", userRouter);

app.listen(8080, () => {
  console.log("服务启动成功");
});
