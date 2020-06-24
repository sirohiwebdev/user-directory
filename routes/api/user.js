const express = require("express");
const userModel = require("../../models/users");

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  userModel
    .getAllUser()
    .then(user => res.status(200).json({ status: "success", data: user }))
    .catch(err => {
      console.log(err);
      return res
        .status(404)
        .json({ status: "failed", error: "User Not found" });
    });
});

userRoute.get("/:id", (req, res) => {
  userModel
    .getUser(req.params.id)
    .then(user => res.status(200).json({ status: "success", data: user }))
    .catch(err => {
      console.log(err);
      return res
        .status(404)
        .json({ status: "failed", error: "User Not found" });
    });
});

userRoute.post("/", (req, res) => {
  userModel
    .addUser(req.body)
    .then(user => res.status(200).json({ status: "success", data: user }))
    .catch(err => {
      console.log(err);

      res.status(404).json({ status: "failed", error: "Error Adding user" });
    });
});

userRoute.put("/:id", (req, res) => {
  userModel
    .updateUser(req.params.id, req.body)
    .then(user => res.status(200).json({ status: "success", data: user }))
    .catch(err => {
      console.log(err);

      res.status(400).json({ status: "failed", error: "Error Updating user" });
    });
});

userRoute.delete("/:id", (req, res) => {
  userModel
    .deleteUser(req.params.id)
    .then(user => res.status(200).json({ status: "success", data: user }))
    .catch(err => {
      console.log(err);

      res.status(400).json({ status: "failed", error: "Error Deleting user" });
    });
});

module.exports = userRoute;
