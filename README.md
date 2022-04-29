# React 技术栈 网易云音乐 PC 项目实战

## 项目简介

### 技术栈

基于 `react` + `redux` + `react-router` + `styled-components` + `axios` + `ant design` + `react-redux` + `redux-thunk` `immutable` + `redux-immutable` + `react-transition-group` 等开发一款 PC 端「网易云音乐 PC」 Web 项目，UI 界面参考了 PC 版的网易云音乐、flex 布局。

## 界面和功能展示

![输入图片说明](f41e87364dd27a9da4f63583c2b9408.png)
![输入图片说明](1e54ca6cf888ff141cd4309c691ed26.png)
![输入图片说明](88cda231d6830f0b7a57ab0cafc107e.png)
![输入图片说明](679ad5596fec40ea73c35f9344bfccb.png)
![输入图片说明](a46799fc3f041e6899fce96a9e51203.png)
![输入图片说明](b71eec03664ebbadd60d7d62c8e4a36.png)

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
- 也可以使用已经部署到服务器上的网易云接口: http://123.57.176.198:3000/

## 构建项目

- 克隆代码到本地之后，需要运行 NeteaseCloudMusicApi，来起一个音乐的 API 接口。(**可选)**
- 如果需要在服务器上搭建的话就需要将 API 放到自己的服务器上面。(**可选)**
- 已经部署到服务器的网易云音乐接口: http://39.102.36.212:3000/ (**默认的 API 接口**)

```powershell
# yarn dependencies
yarn install | npm install

# serve with hot reload at localhost:3000
yarn satrt  | npm satrt

# build for production with minification
yarn build  |  npm build
```
