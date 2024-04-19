const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// ----------------- Login credentials saved locally--------

const loginCred = { userName: "Athira", password: "123456" };

// --------------------------- Routes ------------------------------

router.get("/", (req, res) => {
  res.render("loginPage",{error : null});
});
router.post("/login", (req, res) => {
  const userCred = req.body;
  if (
    userCred.userName === loginCred.userName &&
    userCred.userPassword === loginCred.password
  )
    res.render("homePage", { userName: loginCred.userName });
  else
    res.render("loginPage",{error : "Error : Username or Password Incorrect !"});
});
router.get("/login", (req, res) => {
  res.redirect("/");
});
router.get("/signup", (req, res) => {
  res.render("signupPage");
});

module.exports = router;
