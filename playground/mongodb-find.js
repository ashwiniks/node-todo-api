const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=> {
    if(err)
        {
            return console.log("there might be some issue");

        }
       console.log("great!! we are connected now");
       db.collection('Todos').find({}).toArray().then((doc)=>{
           console.log(doc);
       },(err)=>{
           console.log("there is error");
       })
    
});

