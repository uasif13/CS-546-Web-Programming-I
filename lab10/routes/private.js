const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.render("partials/details", {title: "Details", userData: req.session.user})
})
module.exports = router