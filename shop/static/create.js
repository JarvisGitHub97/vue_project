let fs = require('fs'),
  ary = [];
  
  for(let i=1;i<=8; i++) {
      let str = i%2 ? 'https://images.ctfassets.net/ooa29xqb8tix/5xd4Ywcck8GIuwkCmWGOCi/ae88606848ac3f12cb3b93195e6e6827/iPhoneX-ExtraSpace.jpg':'https://media.wired.com/photos/59b95b40a9e33173fe3624e5/master/w_2400,c_limit/iphonex_TA.jpg';
    ary.push({
      id: i,
      title: "iPhone X 黑科技，即可拥有",
      price: "￥3999",
      src: str
    });
  }

  fs.writeFileSync('./cart/cartInfo.json', JSON.stringify(ary), 'utf-8');