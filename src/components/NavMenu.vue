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
