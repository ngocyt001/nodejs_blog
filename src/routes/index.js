const newsRouter = require('./news')

function routes(app) {
    app.use('/news', newsRouter)

    app.get('/', (req, res) => {
    res.render('home')
    })
    
    
    app.get('/search', (req, res) => {
    res.render('search')
    })
    
    app.post('/search', (req, res) => {
    console.log(req.body);
    
    res.send('')
    })
}

module.exports = routes