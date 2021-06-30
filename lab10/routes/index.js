const loginRoutes = require('./login')
const privateRoutes = require('./private')
const logoutRoutes = require('./logout')
const mainRoutes = require('./main')

const constructorMethod = (app) => {
    app.use('/', mainRoutes);
    app.use('/login', loginRoutes);
    app.use('/private', privateRoutes);
    app.use('/logout', logoutRoutes);

    app.use('*', (req,res) => {
        res.sendStatus(404);
    })
}

module.exports = constructorMethod;