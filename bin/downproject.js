const fs = require('fs');
const chalk = require('chalk');//可以给终端的字体加上颜色。
const symbols = require('log-symbols');//可以在终端上显示出 √ 或 × 等的图标。
const path = require('path');
let arr = [];
module.exports = function(name,answers){
    if(!fs.existsSync(name)){
        let templatePath = path.join(__dirname, '../project'+ '/' + answers.type);
            targetPath = './'+name;
        fs.mkdir(targetPath,function () {
            pushFileType(arr,templatePath);
            createProject(targetPath,templatePath)
            console.log(symbols.success, chalk.green('项目初始化完成'));
        })


    }else{
        // 错误提示项目已存在，避免覆盖原有项目
        console.log(symbols.error, chalk.red('项目已存在'));
    }
};

/**
 * 区分文件类型
 *
 * @param {*} path
 */
function pushFileType(arr,path) {
    let files = fs.readdirSync(path);
    files.forEach((v,i) => {
        let nowPath = path+'/'+v;
        let stat = fs.statSync(nowPath);
        if(stat.isDirectory()){
            arr.push(['dir',nowPath]);
            pushFileType(arr,nowPath);
        }else{
            arr.push(['file',nowPath]);
        }
    })
}

/**
 * 创建项目
 *
 * @param {*} targetPath
 * @param {*} templatePath
 */
function createProject(targetPath,templatePath) {
    arr.forEach(element => {
        (function (element) {
            let path = element[1];
            if(element[0] === 'file'){
                fs.readFile(path,function(err,data){
                    if(err){
                        console.log(symbols.error, chalk.red('读取模板文件失败：'+ path));
                    }
                    fs.writeFile(targetPath+'/'+path.replace(templatePath + '/',''),data,function(err){
                        if(err){
                            console.log(err);
                        }
                    });
                })
            }else{
                fs.mkdir(targetPath+'/'+path.replace(templatePath + '/',''),function (err) {
                    if(err){
                        console.log(err);
                    }
                });
            }
        })(element)
    });
}