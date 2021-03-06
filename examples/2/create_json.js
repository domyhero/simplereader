var fs = require('fs')

function write_json(book){
  var content =  JSON.stringify(book, null, 4); // Indented 4 spaces
  
  fs.writeFile('dist/i am mkdir folder/book.json', content, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });
}


var book = { title: '大主宰',
  author: '作    者：天蚕土豆',
  update_time: '更新时间：2016-07-10',
  latest_chapter: '最新章节：<a href="4091426.html" target="_blank">第一千两百六十二章 大陆洗礼</a>',
  intro: '\n\t\t\t\t\t<p>    大千世界，位面交汇，万族林立，群雄荟萃，一位位来自下位面的天之至尊，在这无尽世界，演绎着令人向往的传奇，追求着那主宰之路。\n    无尽火域，炎帝执掌，万火焚苍穹。\n    武境之内，武祖之威，震慑乾坤。\n    西天之殿，百战之皇，战威无可敌。\n    北荒之丘，万墓之地，不死之主镇天地。\n    ......\n    少年自北灵境而出，骑九幽冥雀，闯向了那精彩绝伦的纷纭世界，主宰之路，谁主沉浮？\n    大千世界，万道争锋，吾为大主宰。\n    ..................\n</p>\n\t\t\t\t\t<p>各位书友要是觉得《大主宰》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！</p>\n\t\t\t\t',
  chapters: 
   [ { num: '153064', title: '第一章已发。', url: '153064.html' },
     { num: '153065', title: '第一章 北灵院', url: '153065.html' },
     { num: '153066', title: '第二章 被踢出灵路的少年', url: '153066.html' },
     { num: '153067', title: '第三章 牧域', url: '153067.html' },
  { num: '153068', title: '第四章 大浮屠诀', url: '153068.html' }
  ]
};

  
write_json(book)
