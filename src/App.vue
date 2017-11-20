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
      alert('hello ts')
  }
  get computedMsg(){
      console.log('method')
  }
  created(){
      console.log('ele created')
  }
  
}
</script>
<style scoped>
     
</style>
