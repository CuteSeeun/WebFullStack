const http = require("http");

const PORT = 3333;

const server = http.createServer((request, response)=>{
    //한글이 깨지면 컨텐트 타입을 적어줘야 한다
    response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"})

    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head><title>첫번째 node.js 서버</title></head>");
    response.write("<body>");
    response.write("<h1>hello node.js world</h1>");
    response.write("<h1>마라탕</h1>");
    response.write("</body>");
    response.write("</html>");


    response.end("hi");
    
});
server.listen(PORT, ()=>{
    console.log(`서버 실행 중 http://localhost:${PORT}`);
});
