const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const userData =[ {
    name: 'shubham',
    age: 27,
    email: 'shub@test.com'
},
{
    name: 'ritik',
    age: 23,
    email: 'shub@tesst.com'
}
]
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(JSON.stringify(userData));
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});