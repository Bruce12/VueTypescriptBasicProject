<template>
   <div>
       <div class="container">
           <form action="/" >
                UserName:<input type="text" placeholder="请输入用户名"><br/>
                password:<input type="password">
                <input type="button" value="登录" @click="getLogin()"/>
           </form>
       </div>
   </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import component from '../../../lib/index'  
    @component
    export default class login extends Vue {
        //method
        getLogin(){
            alert('click');
            //发送数据库登录请，检查返回结果
            // let isLogoin = true;
            // if ( isLogoin ){
            //     alert('ok')
            //     this.$router.addRoutes('/index')
            // }
        }
        created(){
            alert('ok')
        }
        mounted(){
            alert('mounted')
        }
    }   
</script>
<style scoped>
    .container{
        width: 400px;
        margin: 90px auto;
        border: 1px solid #ddd;
        background:#999999;
        text-align: center;
        height: 150px;
        line-height: 50px;
    }
</style>




