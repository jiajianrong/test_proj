var MongoClient = require('mongodb').MongoClient;
//var DB_CONN_STR = 'mongodb://10.252.56.175:27017/test';    
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/test';

var selectData = function(db, callback) {  
  
  var collection = db.collection('test_coll');
  
  //var whereStr = {"name":'wilson001'};
  collection.find().toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  selectData(db, function(result) {
    console.log(result);
    db.close();
  });
});
