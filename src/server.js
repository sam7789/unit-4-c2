const connect = require('./configs/db');
const app = require("./index");

app.listen(5000,async ()=>{
    try {
        await connect();
    } catch (error) {
        console.log("error:" ,error );
    }
    console.log("lishening to port 5000");
});
