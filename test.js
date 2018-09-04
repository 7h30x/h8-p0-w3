const http=require('http');
const hostname= '127.0.0.1'; //localhost , so use loopback adddress;
const port='3000';   //define port 
const server=http.createServer((req, res) => {res.statuscode= 200;
                     res.setHeader('Content-type', 'text/plain');
                    res.end('Hello world'); //outputs to the browser
                    });

server.listen(port, hostname, () => {           
    console.log('Server started on port' +port);
})
