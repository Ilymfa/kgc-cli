#!/usr/bin/env node
const cm = require('commander');//解析和处理命令
const inquirer = require('inquirer');//用户交互
const down = require('./bin/downproject.js');
cm.version('1.0.0','-v --version',);
cm.command('init <name>').action((name) => {
    inquirer.prompt([
        {
            type: "list",
            message: "请选择项目类型:",
            name: "type",
            choices: [
                "pc",
                "m",
            ],
            pageSize: 2 // 设置行数
        },
    ]).then((answers) => {
        // 处理程序
        down(name,answers);
    })
})
cm.parse(process.argv);