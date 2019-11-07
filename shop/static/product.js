let fs = require('fs'),
  ary = [];
for (let i=1; i<=10; i++) {
  ary.push({
    "id": i,
    "commentName": "阿花",
    "time": "2019-10-12T05:13:06.000Z",
    "text": "hello world! "
  })
}

fs.writeFileSync('./comment.json', JSON.stringify(ary), 'utf-8')