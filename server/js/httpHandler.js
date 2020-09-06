const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {

  // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET' && req.url === '/swimCommand') {
    // console.log("MADE IT IN THE IF STATEMENT");
    // var swimCommandSet = ['up', 'down', 'left', 'right'];
    // var randomElem = Math.floor(Math.random() * swimCommandSet.length);
    res.writeHead(200, headers);
    res.end(messageQueue.dequeue());
    next();
  } else if (req.method === 'GET' && req.url === '/background.jpg') {
    fs.readFile(module.exports.backgroundImageFile, (err, data) => {
      if (err) {
        res.writeHead(404, headers);
      } else {
        res.writeHead(200, headers);
        res.write(data, 'binary');
      }
      res.end();
      next();
    })

  }

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
    next();
  }

  // console.log('req: ', req, 'res: ', res);
  // var swimCommandSet = ['up', 'down', 'left', 'right'];
  // var randomElem = Math.floor(Math.random() * 4);

   // invoke next() at the end of a request to help with testing!
};
