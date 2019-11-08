let fs = require('fs'),
  ary = [];
for (let i=1; i<=5; i++) {
  ary.push({
    "id": i,
    "title": "甜品小屋",
    "img_url": "http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg",
    "text": "甜品，也叫甜点，是一个很广的概念，大致分为甜味点心和广式的糖水。"
  })
}

fs.writeFileSync('./photo/photoMin.json', JSON.stringify(ary), 'utf-8')