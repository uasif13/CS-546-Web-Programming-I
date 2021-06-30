const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    req.session.destroy()
    res.render('partials/logout', {title: "logout"})
})
module.exports = router;
