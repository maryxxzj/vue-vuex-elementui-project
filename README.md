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
### 项目目录结构
```
src
├── index.html
├── main.js  # 入口
├── App.vue  
├── components  # 组件
│   └── BasicContainer.vue
│   └── BasicLayout.vue
│   └── FormCheckbox.vue
│   └── FormRadio.vue
│   └── Header.vue
│   └── Nav3.vue
│   └── Nav4.vue
│   └── NavMenu.vue
├── router 
│   ├── index.js
│   └── nav-router-config.js
└── store
    └── store.js       
```
## 七步骤搭建项目：
### 1. vue-cli 安装模板及初始化项目
#### vue-cli 安装模板及初始化项目
全局安装vue-cli  `$ npm install --global vue-cli`

创建一个基于webpack模板的新项目  `$ vue init webpack vue-vuex-elementui-project`

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

安装Element UI `npm i element-ui -S` 或 `npm install element-ui -S`

使用Element UI

①在src/main.js文件中引入ElementUI：`import ElementUI from 'element-ui'`

②在src/main.js文件中引入ElementUI 的index.css：`import 'element-ui/lib/theme-chalk/index.css'`

③使用插件 `Vue.use(ElementUI)`

src/main.js文件
```
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
ElementUI进行布局 ----假设布局品字，Header、Aside、Main

src/App.vue文件
```
<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
```
## 3. 侧边菜单栏&侧边菜单栏优化

### 侧边栏菜单是折叠菜单

* 在components文件夹下新建NavMenu.vue
* 在Element UI组件中找到【NavMenu 导航菜单】->【折叠】，复制代码到NavMenu.vue
* 将NavMenu组件导入到App.vue中，修改App.vue
  * ① 引入NavMenu组件`import NavMenu from '@/components/NavMenu'`
  * ② 将NavMenu注入到components中`components: { 'navmenu': NavMenu }`
  * ③ HTML中使用组件`<navmenu></navmenu>`
  
**在components文件夹下新建NavMenu.vue**
```
<template>
  <el-container style="display: inline-block;">
     <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
       <el-radio-button :label="false">展开</el-radio-button>
       <el-radio-button :label="true">收起</el-radio-button>
     </el-radio-group>
     <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
       <el-submenu index="1">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span slot="title">导航一</span>
         </template>
         <el-menu-item-group>
           <span slot="title">分组一</span>
           <el-menu-item index="1-1">选项1</el-menu-item>
           <el-menu-item index="1-2">选项2</el-menu-item>
         </el-menu-item-group>
         <el-menu-item-group title="分组2">
           <el-menu-item index="1-3">选项3</el-menu-item>
         </el-menu-item-group>
         <el-submenu index="1-4">
           <span slot="title">选项4</span>
           <el-menu-item index="1-4-1">选项1</el-menu-item>
         </el-submenu>
       </el-submenu>
       <el-menu-item index="2">
         <i class="el-icon-menu"></i>
         <span slot="title">导航二</span>
       </el-menu-item>
       <el-menu-item index="3" disabled>
         <i class="el-icon-document"></i>
         <span slot="title">导航三</span>
       </el-menu-item>
       <el-menu-item index="4">
         <i class="el-icon-setting"></i>
         <span slot="title">导航四</span>
       </el-menu-item>
     </el-menu>
     
     <style>
       .el-menu-vertical-demo:not(.el-menu--collapse) {
         width: 200px;
         min-height: 400px;
       }
     </style>
  </el-container>
</template>

<script>
  import menus from '@/router/nav-router-config'

  export default {
    data () {
      return {
        isCollapse: true,
        menus: menus
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
```
**将NavMenu组件导入到App.vue中，修改App.vue**
* ① 引入NavMenu组件 `import NavMenu from '@/components/NavMenu'`
* ② 将NavMenu注入到components中 `components: { 'navmenu': NavMenu }`
* ③ HTML中使用组件`<navmenu></navmenu>`
``` 
  <template>
    <div id="app">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <navmenu></navmenu>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script>
    import NavMenu from '@/components/NavMenu'
  
    export default {
      name: 'App',
      components: {
        'navmenu': NavMenu
      }
    }
  </script>
```
### 侧边菜单栏优化
**实现功能**
1. 每次只能展开一个一级菜单
2. 每次点击一个二级菜单可以改变路由，跳转到对应的组件
3. 由于菜单在路由中也会使用，最好抽象出来，做成一个配置文件

Menu Attribute

`unique-opened` 是否只保持一个子菜单的展开

`router` 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转

**NavMenu.vue**
```
<template>
  <el-container style="display: inline-block;">
     <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
       <el-radio-button :label="false">展开</el-radio-button>
       <el-radio-button :label="true">收起</el-radio-button>
     </el-radio-group>
     <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
       :collapse="isCollapse" router unique-opened>
       <el-submenu index="1">
         <template slot="title">
           <i class="el-icon-location"></i>
           <span slot="title">导航一</span>
         </template>
         <el-menu-item-group>
           <span slot="title">分组一</span>
           <el-menu-item index="1-1">选项1</el-menu-item>
           <el-menu-item index="1-2">选项2</el-menu-item>
         </el-menu-item-group>
         <el-menu-item-group title="分组2">
           <el-menu-item index="1-3">选项3</el-menu-item>
         </el-menu-item-group>
         <el-submenu index="1-4">
           <span slot="title">选项4</span>
           <el-menu-item index="1-4-1">选项1</el-menu-item>
         </el-submenu>
       </el-submenu>
       <el-menu-item index="2">
         <i class="el-icon-menu"></i>
         <span slot="title">导航二</span>
       </el-menu-item>
       <el-menu-item index="3" disabled>
         <i class="el-icon-document"></i>
         <span slot="title">导航三</span>
       </el-menu-item>
       <el-menu-item index="4">
         <i class="el-icon-setting"></i>
         <span slot="title">导航四</span>
       </el-menu-item>
     </el-menu>
     
     <style>
       .el-menu-vertical-demo:not(.el-menu--collapse) {
         width: 200px;
         min-height: 400px;
       }
     </style>
  </el-container>
</template>

<script>
  import menus from '@/router/nav-router-config'

  export default {
    data () {
      return {
        isCollapse: true,
        menus: menus
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
```
每次增加一个菜单都要写HTML，容易出错，使用JS实现。
* ① 在src/router目录下创建一个nav-router-config.js 文件。外层的数组代表一级菜单，内层sub数组代表二级菜单，依次类推。
* ② 在NavMenu.vue中引入nav-router-config.js文件，并使用`v-for`循环去渲染这个菜单。

在src/router目录下创建一个nav-router-config.js 文件(路由也会使用)
``` 
module.exports = [
  {
    name: '基础',
    id: 'basic',
    icon: 'el-icon-location',
    sub: [
      {
        name: 'Layout 布局',
        id: 'BasicLayout'
      },
      {
        name: 'Container 布局容器',
        id: 'BasicContainer'
      }
    ]
  },
  {
    name: 'Form',
    id: 'form',
    icon: 'el-icon-menu',
    sub: [
      {
        name: 'Radio 单选框',
        id: 'FormRadio'
      },
      {
        name: 'Checkbox 多选框',
        id: 'FormCheckbox'
      }
    ]
  },
  {
    name: '导航三',
    id: 'Nav3',
    icon: 'el-icon-document'
  },
  {
    name: '导航四',
    id: 'Nav4',
    icon: 'el-icon-setting'
  }
]
```
在NavMenu.vue中引入nav-router-config.js文件，并使用`v-for`循环去渲染菜单

**NavMenu.vue**
```
<template>
  <el-container style="display: inline-block;">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse" router unique-opened>
      <el-submenu v-for="menu in menus" :index=menu.id :key="menu.id">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title" v-text="menu.name"></span>
          </template>
          <el-menu-item-group v-for="item in menu.sub" :key="item.id">
            <el-menu-item :index="item.id" v-text="item.name"></el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-container>
</template>

<script>
  import menus from '@/router/nav-router-config'

  export default {
    data () {
      return {
        isCollapse: true,
        menus: menus
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
```

## 4. Hearder优化
### 在componets文件夹下创建一个Header.vue
``` 
<template>
  <el-row>
    <el-col :span="24">
      <div class="head-wrap">Vue+VueRouter+Vuex+ElementUI</div>
    </el-col>
  </el-row>
</template>

<style scoped>
  .head-wrap {

  }
</style>
```
### 在App.vue中引入Header.vue
``` 
<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader></vheader>
      </el-header>
      <el-container>
        <el-aside style="width: 220px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/NavMenu'
  import VHeader from '@/components/Header'

  export default {
    name: 'App',
    components: {
      navmenu: NavMenu,
      vheader: VHeader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
    margin-bottom: 10px;
  }
</style>
```
## 5. 组件路由与懒加载
### 在components新增六个文件（对应nav-router-config.js)：
BasicContainer.vue
``` 
<template>
  <div>
    Container 布局容器
  </div>
</template>
```
BasicLayout.vue
```
<template>
     <div>
       Layout 布局
     </div>
</template>
```
FormCheckbox.vue
``` 
<template>
  <div>
    Checkbox 多选框
  </div>
</template>
```
FormRadio.vue
``` 
<template>
  <div>
    Radio 单选框
  </div>
</template>
```
Nav3.vue
```
<template>
  <div>
    Nav 3
  </div>
</template>
```
Nav4.vue
```
<template>
  <div>
    Nav 3
  </div>
</template>
```
### 修改route/index.js文件
``` 
import Vue from 'vue'
import Router from 'vue-router'

import NavRouter from '@/router/nav-router-config'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

var routes = []
NavRouter.forEach((item) => {
  if (item.sub) {
    item.sub.forEach((sub) => {
      routes.push({
        path: `/${sub.id}`,
        name: sub.name,
        component: () => import(`@/components/${sub.id}`)
      })
    })
  } else {
    routes.push({
      path: `/${item.id}`,
      name: item.name,
      component: () => import(`@/components/${item.id}`)
    })
  }
})

export default new Router({
  routes: routes
})
```
### App.vue文件需要加上 router-view
```
<el-main>
  <router-view></router-view>
</el-main>
```
## 6. 安装vuex及使用
### vuex介绍
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
简单来说，用来集中管理数据，类似于React中的Redux，都是基于Flux的前端状态管理框架。

Vuex的核心是Store(仓库)，相当于是一个容器，一个store实例包含：
* state 定义属性（状态、数据）
* getters 用来获取属性
* actions 定义方法（动作）
* commit 提交变化，修改数据的唯一方式就是显式的提交mutations
* mutations 定义变化

注：不能直接修改数据，必须显式提交变化，目的是为了追踪到状态的变化

### vuex使用
#### 1. 安装vuex
NPM安装 `npm install vuex --save`

在一个模块化的打包系统中，必须显式地通过 Vue.use() 来安装 Vuex：
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
```
#### 2. 创建store.js文件
```
/**  vuex配置  **/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//定义属性（数据）
var state={  count:6 }

//定义getters
var getters={
    count(state){
        return state.count;
    },
    isEvenOrOdd(state){
        return state.count%2==0?'偶数':'奇数';
    }
}

//定义actions，要执行的操作，如流程判断、异步请求等
const actions = {
    increment(context){//包含：commit、dispatch、state
        console.log(context);
        // context.commmit()
    },
    // increment({commit,state}){
    //     commit('increment'); //提交一个名为increment的变化，名称可自定义，可以认为是类型名
    // },
    decrement({commit,state}){
        if(state.count>10){
            commit('decrement');
        }
    },
    incrementAsync({commit,state}){
        //异步操作
        var p=new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve();
            },3000);
        });

        p.then(() => {
            commit('increment');
        }).catch(() => {
            console.log('异步操作');
        });
    }
}

//定义mutations，处理状态（数据）的改变
const mutations={
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    }
}

//创建store对象
const store=new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

//导出store对象
export default store;
```
#### 3. 在main.js中导入并配置store
配置store选项，指定为store对象，会自动将store对象注入到所有子组件中，在子组件中通过`this.$store`访问该store对象。
```
...
import router from './router'
import store from './store.js' //导入store对象

new Vue({
  el: '#app',
  router,  //配置router选项 
  store,   //配置store选项 
  components: {App},
  template: '<App/>'
  render: h => h(App)
})
```
####4. 访问store对象：编辑App.vue
在子组件中访问store对象的两种方式：

方式1：通过`this.$store`访问

方式2：通过`mapState`、`mapGetters`、`mapActions`访问，vuex提供了两个方法：
* mapState 获取state
* mapGetters 获取getters
* mapActions 获取actions
### 分模块组织Vuex
每个模块都可以拥有自己的state、getters、actions、mutations
```
|-src
    |-store
        |-index.js
        |-getters.js
        |-actions.js
        |-mutations.js
        |-modules  //分为多个模块 
            |-user.js
            |-cart.js
            |-goods.js
            |....
```
## 7. 打包部署
注意：自己开发的项目文件都需要放到 `src`文件夹下。

在项目开发完成之后，可以输入`npm run build`来进行打包工作。 打包完成后，会生成 dist 文件夹，如果已经修改了文件路径，可以直接打开本地文件查看。 项目上线时，只需要将`dist`文件夹放到服务器就行了。
# 至此，整个项目搭建完成
### git部署
在github上部署，要修改`config/index.js`的代码, 不然有些文件因为路径问题可能会找不到。
```
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    ...
}
```
如果本地调试项目时，建议将build 里的`assetsPublicPath`的路径前缀修改为 `' ./ '`（开始是` ' / '`），因为打包之后，外部引入 js 和 css 文件时，如果路径以 `' / '` 开头，在本地是无法找到对应文件的（服务器上没问题）。如果需要在本地打开打包后的文件，就得修改文件路径。
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

