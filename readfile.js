var fs = require('fs');
// 异步读取
fs.readFile('./file/test.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
        console.log('文件读取失败');
    }else{
        console.log(data);
    }
})
console.log('异步读取文件');