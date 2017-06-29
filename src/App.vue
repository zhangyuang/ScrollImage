<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import router from './router'
import MyFooter from './components/MyFooter/MyFooter'
export default {
  components: {
    MyFooter
  },
  data () {
    return {
     
    }
  },
  mounted () {
    
   
  },
  methods: {
    
    
  },
  watch: {
    
  }
}
</script>

<style>

</style>
