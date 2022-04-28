
var backend = require('../backend/index.js')({})

module.exports = function(obj){
    return {getTodos, saveTodos, deleteTodo}
}

function getTodos(req,res){
backend.getTodos({}, function(options){
    res.send(options);
});

}
function saveTodos(req, res) {
    let data = req.body;
   
    let props = {
      title: data.title,
      due_date : data.due_date
    };
  
    backend.saveTodos(props, (options) => {
      res.send(options);
    });
  }

  function deleteTodo(req, res) {
    
    
  
    var data = {
      id: req.body.id,
    };
  
      backend.deleteTodo(data, (options) => {
        res.send(options);
      });
   
    
  }