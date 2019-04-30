<template>
    <div class="login_wraper">
         <div class="login_wraper">
             <h3>管理员登录页面</h3> 
         </div>
        <div class="login_inner">
                <el-form label-position="left" label-width="80px" :model="formData">
                    <el-form-item label="用户名：">
                        <el-input v-model="formData.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：">
                        <el-input v-model="formData.password" type='password'></el-input>
                    </el-form-item>
               <!-- <el-form-item label="活动形式">
                        <el-input v-model="formData.type"></el-input>
                    </el-form-item> -->
                     <el-form-item>
                         <el-button @click="submitLogin"> 登录</el-button>
                     </el-form-item>
                </el-form>   
        </div>
    </div>
</template>
<script>
import {post_http} from '@/api'
import md5 from 'md5'
export default {
    data(){
        return{
            formData:{
                username:"",
                password:''
            }
        }
    },
    methods:{
        submitLogin(){
          post_http('adminLogin',{
              username:this.formData.username,
              password: md5(this.formData.password)
          }).then(res=>{
           if(res.code ==200){
                setTimeout(()=>{
                    this.$router.push('/home')
                },500)
                 this.$message({
                   message:"Login successful!",
                   type:'success',
                   center:true
               })
           }else{
               this.$message({
                   message:res.msg,
                   type:'warning',
                   center:true
               })
           }
          })
        }
    }
};
</script>

<style scoped lang='stylus'>
.login_wraper
    width 100%
    height 100%
    background-color #f1f2f3
    .login_inner
        min-width 200px
        padding 20px
        margin 0 auto 
        max-width 500px
    .login_wraper
        height 6%
        line-height 50px
        text-align center
        h3
         display inline-block

</style>