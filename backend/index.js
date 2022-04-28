const db = require('../db');
module.exports = function(obj){
    return {getTodos,saveTodos,deleteTodo}
}
function getTodos(options, callback){
    var sqlStmt = `select * from todo`;

    db.query(sqlStmt, function (err, rows, fields) {
      if (err) {
        options.response = null;
        options.status = 500;
        options.error = err;
        callback(options);
      } else {
        options.response = rows;
        options.status = 200;
        options.error = null;
        callback(options);
      }
    });
}

function saveTodos(payload, callback){
  var options={};
  var sqlStmt = `INSERT INTO todo(title, due_date)
  VALUES ("${payload.title}","${payload.due_date}");`;

  db.query(sqlStmt, function (err, rows, fields) {
    if (err) {
      options.response = null;
      options.status = 500;
      options.error = err;
      callback(options);
    } else {
      options.response = rows;
      options.status = 200;
      options.error = null;
      callback(options);
    }
  });
}

function deleteTodo(payload, callback){
  var options={};
  var sqlStmt = `DELETE FROM todo WHERE id="${payload.id}"`;

  db.query(sqlStmt, function (err, rows, fields) {
    if (err) {
      options.response = null;
      options.status = 500;
      options.error = err;
      callback(options);
    } else {
      options.response = rows;
      options.status = 200;
      options.error = null;
      callback(options);
    }
  });
}


