# vue+vueRouter+vuex+ElementUI搭建项目

## About
基于 vue2.0 + vueRouter+ vuex + element-ui 搭建一个简单的项目

## 技术栈   
  *   Vue
  *   Vue-router
  *   Element-ui
  *   webpack
  *   Normalize.css
  *   vue-awesome
  *   babel
## 分六步骤实现：
### 1. vue-cli 安装模板及初始化项目
#### vue-cli 安装模板及初始化项目
全局安装vue-cli
`$ npm install --global vue-cli`
创建一个基于webpack模板的新项目
`$ vue init webpack vue-vuex-elementui-project`
```
# 需要进行一些配置，默认回车即可
? Project name vue-vuex-elementui-project
? Project description vue Project
? Author mary
? Vue build (Use arrow keys)
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm
   vue-cli · Generated "vue-vuex-elementui-project".

# Installing project dependencies ...
# ========================
...
added 1382 packages from 712 contributors in 109.964s

27 packages are looking for funding
  run `npm fund` for details

Running eslint --fix to comply with chosen preset rules...
# ========================

> vue-vuex-elementui-project@1.0.0 lint H:\project\vue-vuex-elementui-project
> eslint --ext .js,.vue src "--fix"

# Project initialization finished!
# ========================

To get started:
  cd vue-vuex-elementui-project
  npm run dev
```
#### 运行项目
`npm run dev`   

## 2. 安装Element UI&初始化页面布局
## 3. 侧边菜单栏&侧边菜单栏优化
## 4. Hearder优化
## 5. 组件路由与懒加载
## 6. 打包部署
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

