<template>
    <div class="login_wraper">
         <div class="login_wraper">
             <h3>管理员注册页面</h3> 
         </div>
        <div class="login_inner"> 
               <uploadimg @getimgurl='getavatar'></uploadimg>
                <el-form label-position="left" label-width="80px"  status-icon :model="formData" :rules="rules" ref="formData">
                    <el-form-item label="用户名：" prop="username">
                        <el-input v-model="formData.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password">
                        <el-input v-model="formData.password" type='password'></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="活动形式">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item> -->
                     <el-form-item>
                         <el-button @click="submitSign('formData')">创建管理员</el-button>
                     </el-form-item>
                </el-form>   
        </div>
    </div>
</template>

<script>
import uploadimg from '@/components/upload'
import {post_http} from '@/api'
import md5 from 'md5'
export default {
    data(){
        const usernameCheck = (rule,value,callback)=>{
             if (!value) {
                return callback(new Error('用户名不允许为空'));
                }
           setTimeout(() => {
                if(value.length < 3){
                callback(new Error('字符长度必须大于三'));
                } else {
                callback();
                } 
            }, 1000);
        }
        const passwordCheck =(rule,value,callback)=>{
               if (!value) {
                return callback(new Error('密码不允许为空'));
                }
           setTimeout(() => {
                if(value.length < 6){
                callback(new Error('字符长度必须大于六'));
                } else {
                callback();
                } 
            }, 1000);
        }
        return{
            formData:{
                username:"",
                password:'',
                avatar:''
            },

            rules:{
                username:[
                   { validator: usernameCheck, trigger:'blur'}
                ],
              password:[
                   { validator: passwordCheck, trigger:'blur'}
                ]
            }
        }
    },
    components:{
      uploadimg
    },
    methods:{
      getavatar(val){
          this.formData.avatar = val
      },
     submitSign(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(!this.formData.avatar){
                this.$message({
                    message: 'Please upload user profile picture!',
                    type: 'warning'
                    });
            }else{
           this.formData.password = md5(this.formData.password)
             post_http('addadmin',this.formData).then(res=>{
              if(res.code == 200){
                      this.$message({
                    message:'添加成功',
                    type:'success'
                    });
              }
             })
            }
          } else {
           
            return false;
          }
        });
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