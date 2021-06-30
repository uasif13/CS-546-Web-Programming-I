const express = require('express');
const app = express();
const session = require('express-session');
const configRoutes = require('./routes');
const exphbs = require('express-handlebars')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(
    session({
        name: 'AuthCookie',
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true
    })
)

app.use('/private', (req,res,next) => {
    if (!req.session.user) {
        return res.status(403).render('partials/notLoggedIn', {title: 'Not Logged In'})
    } else {
        next();
    }
})

app.use((req, res, next) => {
    let isAuth = ''
    if (!req.session.user) {
        isAuth = 'Non-'
    }
    console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (${isAuth}Authenticated User)`)
    next();
})
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
configRoutes(app);

app.listen(3000, () => {
    console.log("We've got a server running")
    console.log("Your routes will be running on http://localhost:3000")
})