var model = require('../model/index.js')({})
module.exports =  (router, expressApp) => {

    router.get('/todos', model.getTodos)
    
    router.post('/todo', model.saveTodos);
    
    router.delete('/todo', model.deleteTodo)
        
    return router;
  
  }