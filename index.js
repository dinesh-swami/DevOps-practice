import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.json({ messsage: "Hello, tisri duniya!" , status: "again try to test" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/// intialize
