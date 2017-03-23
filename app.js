
var express = require('express');
var blogController = require('./controllers/admin/blogController');
var expressHbs = require('express-handlebars');

var app = express();

//set engine
//app.set('view engine','ejs');
app.engine('.hbs', expressHbs({ defaultLayout: 'layout', extname: '.hbs' }));
//app.engine('.hbs', expressHbs({ defaultLayout: 'adminlayout', extname: '.hbs' }));
app.set('view engine', '.hbs');
//statik file buat assets
app.use(express .static('./'));

//index html , { title: 'Home', class: 'active'}
app.get('/', function(req, res) {
    res.render('pages/home',{title: 'Home', active_home:'active'});
});

app.get('/about', function(req, res) {
    res.render('pages/about',{title: 'About', active_about:'active'});
});


//laman admin
app.get('/admin/dashboard', function(req, res) {
    res.render('admins/dashboard',{title: 'Dashboard', active_dashboard:'active',layout: 'adminlayout'});
});

blogController(app);
/*
app.get('/admin/blog', function(req, res) {
    res.render('admins/blog',{title: 'Blog - Admin', active_blog:'active',layout: 'adminlayout'});
});*/



//masukkan ke app controllernya
//todoController(app);

app.listen(5000);
console.log('Port Anda 5000');
