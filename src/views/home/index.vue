<template>
    <div class="Home_wraper">
        <div class="headers">
             
        </div>
         <div class="body_wraper">
              <div class="left_nav"></div>
              <div class="child_view">             
                    <router-view></router-view>
              </div>
        </div>
    </div>
</template>

<script>
import topHeader from "@/components/Headers";
import leftnav from "@/components/Leftnav";
import {get_http} from '@/api'
export default {
  components: {
    topHeader,
    leftnav
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
      get_http('adminlist').then(res=>{
          console.log(res)
      })
  },
  created() {}
};
window.onresize=()=>{
 let clientWidth = window.innerWidth 
 let  clientHeight = window.innerHeight
 if(clientWidth < 340){
     clientWidth = 340
 }
$('.Home_wraper').css({
    width:clientWidth,
    height:clientHeight
  })

}
</script>

<style scoped lang='stylus'>
.Home_wraper
    width 100%
    height 100%
    .headers
        height 6%
        border-bottom 1px solid #333
    .body_wraper
        height 90%
        display flex
        width 100%
        justify-content space-between
        .left_nav
          flex 0 0 20%
          max-width 10%
          min-width 120px
          border 1px solid yellow
        .child_view
          flex 1
          border 1px solid red
          min-width 200px
          
</style>