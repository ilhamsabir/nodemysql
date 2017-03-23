
var bodyParser = require('body-parser');
var mysql = require('mysql');
var qString = require('querystring');
var koneksi =  mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  database: 'node_db'
});

//cek koneksi apakah terhub atau nga
koneksi.connect(function(err){
  if(err){
    console.log('Gagal Konek Ke DB');
    return;
  }
  console.log('Bagus , Sudah Konek Ke DB');
});

//variabel menampilkan datanya


var urlencodeParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

  app.get ('/admin/blog', function(req, res){
    var tampilBlog = 'SELECT * FROM tblog';
    koneksi.query(tampilBlog,function(err,data){
      if(err) throw err;
          res.render('admins/blog', {title: 'Blog - Admin', active_blog:'active',layout: 'adminlayout', blogs: data});
      });
   });

   app.get ('/admin/blog/add', function(req, res){
     //var isinya = { judulblog: 'judulju',kategoriblog: 'katego1', isiblog: 'isiblogggg' };
     var input = JSON.parse(JSON.stringify(req.body));
     var data = {
             judulblog    : input.judulblog,
             kategoriblog : input.kategoriblog,
             isiblog   : input.isiblog
         };
     koneksi.query('INSERT INTO tblog SET ?',isinya,function(err,res){
       if(err) throw err;
            res.render('admins/log', {title: 'Blog - Admin', active_blog:'active',layout: 'adminlayout'});
          //  console.log('A new employee has been added.');
        });
      /* if(req.method.toUpperCase() == "POST"){
     var data_post = "";
       req.on('data',function(chunk)){
         data_post += chunk;
       });

       req.on('end',function(){
         data_post = qString.parse(data_post);
         console.log(data_post);
         res.end();
       });
     }else{
       res.render('admins/addblog', {title: 'Blog - Admin', active_blog:'active',layout: 'adminlayout'});
     } */

   });

};
