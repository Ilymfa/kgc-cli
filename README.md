没事 自己写这玩的...

+ 提供两套平常写静态页的模板（pc、m）

### 通过kgccli init <name> 命令来初始化项目

### 注意事项

1. 发布一个npm包，首先要确定npm的`registry`是npmjs源，而不是淘宝镜像
2. 如果是源是淘宝镜像切换npmjs源后需要重新登录
```bash
# npmjs 源
npm config set registry=http://registry.npmjs.org

# 淘宝镜像
npm config set registry http://registry.npm.taobao.org/
```

### 更新版本
1. 修改版本号：使用 npm version <update_type> 进行修改，update_type 有三个参数
+ patch：bug修改、优化、小改动
+ minor：添加新功能，向后兼容
+ major：大的版本升级，无法向下兼容
```bash
# 例如 kgc-cli 当前版本1.0.0
npm version patch
# 执行npm version patch 后为1.0.1
npm version minor
# 执行npm version minor 后为1.1.0
npm version major
# 执行npm version major 后为2.0.0
```

2. 修改完版本号，使用npm publish上传到远端npm