let express = require('express')
let app = express();


app.get('/',function(req, res){
    res.sendFile(__dirname +'/site/listacompras.html')
})



app.listen(8010, function(){
    console.log("Server online")
})  