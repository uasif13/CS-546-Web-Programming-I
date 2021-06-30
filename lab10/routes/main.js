const express = require('express')
const router = express.Router();

// Insert router methods if needed
router.get('/', async (req,res) => {
    if (req.session.user) {
        res.redirect('/private')
        return;
    } else {
        res.render("partials/login", {title: "Please Sign In", error: ""})
        return;
    }
})
module.exports = router;
