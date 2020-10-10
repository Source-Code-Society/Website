const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get('/login', (req,res) => {
    res.render('login',{title: 'Login'})
})

router.get('/register', (req,res)=> {
    res.render('register', {title: 'Create Account'})
})

module.exports = router;
