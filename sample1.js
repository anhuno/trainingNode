var fs = require('fs');
var content = fs.readFileSync('data/members.json','utf8');
console.log(content);
