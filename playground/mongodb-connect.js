const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=> {
    console.log("dffd");
    if(err)
        {
            return console.log("there might be some issue");

        }
      /*  db.collection("Users").insertOne({
            "name" : "this is a dummy task",
            "age" : 25,
            "location" : "ggn"
        },(err,res)=>{
            if(err)
                {
                    return err;
                }
                console.log(JSON.stringify(res));

        }); */

        db.collection("Todos").insertOne({
            "text" : "this is a dummy task",
            "conpleted" : false
          
        },(err,res)=>{
            if(err)
                {
                    return err;
                }
                console.log(JSON.stringify(res));

        });

});