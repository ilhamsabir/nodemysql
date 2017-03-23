
var bodyParser = require('body-parser');


module.exports = function(app){

}
/*var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogdb');

//schema mongoose
var todoSchema =  new mongoose.Schema({
  item:String
});

var Todo = mongoose.model('Todo', todoSchema);

var urlencodeParser = bodyParser.urlencoded({extended: false});



  app.get ('/todo', function(req, res){
    Todo.find({}, function(err, data){
      if (err) throw err;
       res.render('todo', {todos: data});
    });
  });

  app.post ('/todo',urlencodeParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err,data){
      if (err) throw err;
       res.json(data);

    });
  });

  app.delete ('/todo/:item', function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err;
      res.json(data);
    });

  });
*/
