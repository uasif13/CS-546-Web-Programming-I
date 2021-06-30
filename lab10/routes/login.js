const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const users = require('../data/users')

router.post('/', async (req, res) => {
    const {username, password} = req.body;
    let hashPass = ''
    let userDetails = {}
    users.forEach(user => {
        if (user.username === username) {
            hashPass = user.hashedPassword
            userDetails = user;
        }
    })
    if (hashPass === '') {
        res.status(401).render("partials/login",{title: "Please Sign In", error: "Please provide a valid username"})
        return;
    }
    else {
        let match = await bcrypt.compare(password, hashPass)
        if (match) {
            const {_id, username, _, firstName, lastName, profession, bio} = userDetails;
            req.session.user = {username: username, firstName: firstName, lastName: lastName, profession: profession, bio: bio}
            res.redirect('/private')
            return;
        } else {
            res.status(401).render("partials/login",{title: "Please Sign In", error: "Please provide a valid password"})
            return;
        }
    }
    // console.log("end of post method")

})

module.exports = router;