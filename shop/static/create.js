let fs = require('fs'),
  ary = [];
  for(let i=1;i<=8; i++) {
    ary.push({
      id: i,
      title: "iPhone X 黑科技，即可拥有",
      new_price: "￥3999",
      old_price: "￥9999",
      time: "2019-10-12T05:13:06.000Z",
      saled: "97656"
    });
  }

  fs.writeFileSync('./goods/goodInfo.json', JSON.stringify(ary), 'utf-8');