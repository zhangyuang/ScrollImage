<template>
  <div id="app">
    <div class="nav">
      <div class="nav-radius" id='index' ref='1'></div>
      <div class="nav-radius" id='second' ref='2'></div>
      <div class="nav-radius" id='third' ref='3'></div>
      <div class="nav-radius" id='third' ref='4'></div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['current'],
  data () {
    return {
     
    }
  },
  mounted () {
    this.$refs[this.current].style.backgroundColor = '#fe8935'
  },
  methods: {
    
    
  },
  watch: {
    'current' (newValue, oldValue) {
      this.$refs[newValue].style.backgroundColor = '#fe8935'
      this.$refs[oldValue].style.backgroundColor = '#fff'
    }
  }
}
</script>

<style>
.nav {
  position: absolute; 
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
}
.nav-radius {
  float: left;
  width: 0.3125rem;
  height: 0.3125rem;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 5px;
}
</style>
