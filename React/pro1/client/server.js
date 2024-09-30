const http = require("http");
const app = require("./app.js");

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`http://localhost:` + app.get('port')); 
});