let fs = require('fs'),
  ary = [];
for (let i=1; i<=8; i++) {
  ary.push({
    "id": i,
    "url": "https://cn.bing.com/th?id=OIP.td_DIYRJm2f3XpLCrbHhKQHaFk&pid=Api&rs=1"
  })
}
fs.writeFileSync('./banner/homeBanner.json', JSON.stringify(ary), 'utf-8')