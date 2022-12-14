# React 技术栈 网易云音乐 PC 项目实战

## 项目简介

### 技术栈

基于 `react` + `redux` + `react-router` + `styled-components` + `axios` + `ant design` + `react-redux` + `redux-thunk` `immutable` + `redux-immutable` + `react-transition-group` 等开发一款 PC 端「网易云音乐 PC」 Web 项目，UI 界面参考了 PC 版的网易云音乐、flex 布局。

## 界面和功能展示

![输入图片说明](https://s1.ax1x.com/2022/04/30/OSke0S.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSkLNQ.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSkOhj.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSkqAg.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSkj9s.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSkHHS.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSkzj0.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSA9BT.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSkv3n.png)
![输入图片说明](https://s1.ax1x.com/2022/04/30/OSApuV.png)

## 技术栈

### 前端

- `React`：用于构建用户界面的 `MVVM` 框架
- `styled-components`：解决组件内容编写样式会影响全局样式导致冲突
- `axios`: 发送网络请求，请求拦截和响应拦截
- `react-router`：为单页面应用提供的路由系统
- `react-router-config`：集中式路径映射表管理
- `redux`：React 集中状态管理，在多个组件共享某些状态时非常方便
- `react-redux`：帮助我们链及`redux`、`react`的辅助工具
- `immutable`：对`reudx`中保存的`state`使用`immutable`进行管理
- `redux-immutable`: 对根目录的`reducer`中`state`进行管理
- `redux-thunk`: 在`redux`中进行异步请求

### 后端

- `Node.js`：利用 `Express` 搭建的本地测试服务器
- `axios`：用来请求后端 `API` 音乐数据
- [NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/)：网易云音乐 `NodeJS` 版 `API`，提供音乐数据

## 构建项目

- 克隆代码到本地之后，需要再克隆网易云音乐 `NodeJS` 版 `API`，
- 服务器启动默认端口为 3000, 若不想使用 3000 端口 , 可使用以下命令 : Mac/Linux
- $ PORT=4000 node app.js
- windows 下使用 git-bash 或者 cmder 等终端执行以下命令 :
- $ set PORT=4000 && node app.js
- 如果需要在服务器上搭建的话就需要将 API 放到自己的服务器上面。(**可选)**

```powershell
# yarn dependencies
yarn install | npm install

# serve with hot reload at localhost:3000
yarn start  | npm start

# build for production with minification
yarn build  |  npm build
```
