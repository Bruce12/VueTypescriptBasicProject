<template>
    <div>
        <router-view></router-view>
    </div>
 </template>
<script lang="ts">
import Vue from 'vue'
// import Component from 'vue-class-component'
import Component from './lib/index';
@Component({
    props:{ 
       propMessage:Number  
    }
})   
export default class App extends Vue {
  propMessage:number
  msg:number = 123
  helloMsg = 90 - this.propMessage
  greet(){
      alert('hello js')
  }
  get computedMsg(){
      return "ddw"
  }
  created(){
      console.log('okoko')
  }
  
}
</script>
<style scoped>
     
</style>
