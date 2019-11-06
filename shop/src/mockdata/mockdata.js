let fs = require('fs'),
  ary = [];
for (let i=1; i<=10; i++) {
  ary.push({
    "id": 1,
    "title": "经济",
    "time": "2019.10.2",
    "click": 123
  })
}

fs.writeFileSync('./data.json', JSON.stringify(ary), 'utf-8')