let fs = require('fs'),
  ary = [],
  allAry = []; 
for(let k=1; k<=8; k++) {

  for (let i=1; i<=4; i++) {
    let str = i%2 ? 'https://images.ctfassets.net/ooa29xqb8tix/5xd4Ywcck8GIuwkCmWGOCi/ae88606848ac3f12cb3b93195e6e6827/iPhoneX-ExtraSpace.jpg':'https://media.wired.com/photos/59b95b40a9e33173fe3624e5/master/w_2400,c_limit/iphonex_TA.jpg';
    ary.push(
      {
        "id": i,
        "url": str
      }
    )
  }
  allAry.push(ary);
  ary = [];
}

fs.writeFileSync('./goods/goodBanner.json', JSON.stringify(allAry), 'utf-8')