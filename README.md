# shellbox-release


一个可轻松配置的，多端友好的 APP 下载页

Based on [CoolAPK](https://coolapk.com/) and [FEMessage/app-download](https://github.com/FEMessage/app-download) / [Easy-to-Download](https://github.com/idealclover/Easy-to-Download).

**[预览链接 & 贝壳小盒子官网](https://shellbox.airmole.cn)**

- PC 端显示效果

![PC](https://r2.airmole.cn/i/2024/11/15/q94pd-5a.png)

- 移动端显示效果

<a href="https://r2.airmole.cn/i/2024/11/15/qie5w-rc.png" target="_blank"><img src="https://r2.airmole.cn/i/2024/11/15/qie5w-rc.png" width="250"></a>
<a href="https://r2.airmole.cn/i/2024/11/15/qdlr7-g5.png" target="_blank"><img src="https://r2.airmole.cn/i/2024/11/15/qdlr7-g5.png" width="250"></a>

- json 文件轻松配置 三分钟搭建新的 APP 下载页
- 移动端支持直接下载对应系统，iOS 系统自动唤起应用商店
- QQ/微信浏览器引导跳转
- 支持复制网址分享

## 快速开始

```sh
# 安装依赖
yarn

# 开发
yarn dev

# 构建
yarn build
```

## 页面信息配置

修改 config.json 即可配置页面信息，修改后重新执行 yarn dev 即可看到效果。

当然，您也可以对页面 HTML 进行拓展，页面使用 [EJS 模版](https://ejs.bootcss.com/)。

```javascript
{
    "title":"贝壳小盒子",
    "description": "贝壳田园校园生活小助手",
    "detail": "小贝壳er们的专属课表<br />同步查询获取课表、成绩",
    "logo": "https://r2.airmole.cn/i/2024/11/14/1a8io7-xw.jpg",
    "h5": "https://shellbox.ustb.tj.cn",
    "qqapp": "https://m.q.qq.com/a/s/6bfa23e83168c2b2bd5e89932e61f929",
    "iOS": "",
    "Android": "",
    "share": "贝壳小盒子-贝壳田园校园生活小助手 https://shellbox.airmole.cn"
}
```

## License

[MIT](./LICENSE)
