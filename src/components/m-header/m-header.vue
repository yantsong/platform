<template>
<div class="header">
    <div class="container">
        <a class="toptic">第二交易平台</a>
        <div class="nav-menu">
            <router-link tag="a" to = "">现货交易</router-link>
            <router-link tag="a" to="/myaccount">我的账户</router-link>
            <router-link tag="a" to="/history">历史记录</router-link>
            <router-link tag="a" to="/setting">用户设置</router-link>
            <router-link tag="a" to="/help">帮助中心</router-link>
            <router-link tag="a" to="/login">登陆</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
    height: 84px;
    line-height: 84px;
    background-color: #2d85ed;
    .toptic{
        font-size: 40px;
        color:whitesmoke;
    }
    
    a{
        padding: 0 20px;
        background-color: transparent;
        font-size: 18px;
        color: hsla(0, 0%, 100%, .9)
    }
    a:hover{
     background-color: hsla(0, 0%, 100%, .8);
    }
    .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1119px;
    margin: auto;
}
    } 
.nav-menu{
    display: flex
}
</style>
