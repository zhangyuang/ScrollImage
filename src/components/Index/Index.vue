<template> 
<div>
  <div class="box-container">
  	<div class='index-container' @touchstart.prevent="movestart($event)" @touchend.prevent="indexmoveend($event)"@touchmove="indexmoving($event)">
        <div class="head-container">
          <img src="./title.png" class="head-img index-head-img">
        </div>
      	<div class="index-content-container">
          <img src="./center.png" class="content-img"> 
        </div>
        <div>
          <img src="./cloud1-5.png" class="cloud5">
          <img src="./cloud1-2.png" class="cloud2">
          <img src="./cloud1-1.png" class="cloud1">
          <img src="./cloud1-4.png" class="cloud4">
          <img src="./cloud1-3.png" class="cloud3">
        </div>
  	</div>
    <div class='second-container' @touchstart.prevent="movestart($event)" @touchend.prevent="secondmoveend($event)"@touchmove="secondmoving($event)">
        <div class="head-container">
          <img src="./title2.png" class="head-img second-head-img">
        </div>
        <div class="second-content-container">
          <img src="./center2.png" class="content-img"> 
        </div>
        <div>
          <img src="./dongman.png" class="dongman1">
          <img src="./dongman.png" class="dongman2">
          <img src="./dongman.png" class="dongman3">
          <img src="./dongman.png" class="dongman4">
        </div>
    </div>
    <div class='third-container' @touchstart.prevent="movestart($event)" @touchend.prevent="thirdmoveend($event)"@touchmove="thirdmoving($event)">
        <div class="head-container">
          <img src="./title3.png" class="head-img third-head-img">
        </div>
        <div class="third-content-container">
          <img src="./center3.png" class="content-img"> 
        </div>
        <div>
          <img src="./emoji1-2.png" class="emoji1-2">
          <img src="./emoji1-1.png" class="emoji1-1">
          <img src="./emoji1-4.png" class="emoji1-4">
          <img src="./emoji1-6.png" class="emoji1-6">
          <img src="./emoji1-5.png" class="emoji1-5">
        </div>
    </div>
    <div class='fourth-container' @touchstart.prevent="movestart($event)" @touchend.prevent="fourthmoveend($event)"@touchmove="fourthmoving($event)">
        <div class="head-container">
          <img src="./title4.png" class="head-img fourth-head-img">
        </div>
        <div class="fourth-content-container">
          <img src="./center4.png" class="content-img"> 
        </div>
        <div>
          <img src="./msg.png" class="msg-1">
          <img src="./msg.png" class="msg-2">
          <img src="./msg3.png" class="msg-3">
          <img src="./msg.png" class="msg-4">
          <img src="./msg2.png" class="msg-5">
        </div>
    </div>
    <my-nav :current="current"></my-nav>
  </div>
</div> 
</template>

<script type="text/babel">
import MyNav from '../MyNav/MyNav'
export default {
    components: {
      MyNav
    },
    data () {
      return {
      	client: '',
        startx: '',
        endx: '',
        movingx: '',
        distance: '',
        innerWidth: '',
        innerHeight: '',
        deep: 50,//滑动距离超过多少才进入下一张
        current: '1',//当前在第几幅图
      }
    },
    mounted () { 
      this.innerWidth = window.innerWidth 
      this.innerHeight = window.innerHeight 
      document.getElementsByClassName('index-container')[0].style.width = this.innerWidth + 'px'
      document.getElementsByClassName('index-container')[0].style.height = this.innerHeight + 'px'
      document.getElementsByClassName('second-container')[0].style.width = this.innerWidth + 'px'
      document.getElementsByClassName('second-container')[0].style.height = this.innerHeight + 'px'
      document.getElementsByClassName('third-container')[0].style.width = this.innerWidth + 'px'
      document.getElementsByClassName('third-container')[0].style.height = this.innerHeight + 'px'
      document.getElementsByClassName('fourth-container')[0].style.width = this.innerWidth + 'px'
      document.getElementsByClassName('fourth-container')[0].style.height = this.innerHeight + 'px'
    },
    methods: {
      movestart (event) {
        this.startx = event.changedTouches[0].clientX
      },
      indexmoveend (event) {
        this.endx = event.changedTouches[0].clientX
        if (this.distance < -this.deep) {
          //距离大于this.deep下一页才会变成当前页
          document.getElementsByClassName('index-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('index-container')[0].style.marginLeft = -innerWidth + 'px'
          setTimeout(() => {
            document.getElementsByClassName('index-container')[0].style.transition = ''
          }, 1000)
          this.current = '2'
        }
        else {
          //滑动距离不够时返回当前页面
          document.getElementsByClassName('index-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('index-container')[0].style.marginLeft = ''
          setTimeout(() => {
            document.getElementsByClassName('index-container')[0].style.transition = ''
          }, 1000)
        }
      },
      indexmoving (event) {
        this.movingx = event.changedTouches[0].clientX
        this.distance = this.movingx - this.startx 
        if (this.distance < 0) {
          //右滑
          document.getElementsByClassName('index-container')[0].style.marginLeft = this.distance + 'px'
          document.getElementsByClassName('second-container')[0].style.marginLeft = '0'
        }        
      },
      secondmoveend (event) {
        this.endx = event.changedTouches[0].clientX
        if (this.distance < -this.deep) {
          //加载右边
          document.getElementsByClassName('second-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('second-container')[0].style.marginLeft = -innerWidth + 'px'
          setTimeout(() => {
            document.getElementsByClassName('second-container')[0].style.transition = ''
          }, 1000)
          this.current = '3'
        }
        else if (this.distance < 0 && this.distance > -this.deep) {
          document.getElementsByClassName('second-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('second-container')[0].style.marginLeft = '0'
          setTimeout(() => {
            document.getElementsByClassName('second-container')[0].style.transition = ''
          }, 1000)
        }
        else if (this.distance > this.deep) {
          //加载左边
          document.getElementsByClassName('index-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('index-container')[0].style.marginLeft = 0
          setTimeout(() => {
            document.getElementsByClassName('index-container')[0].style.transition = ''
          }, 1000)
          this.current = '1'
        }
        else if (this.distance > 0 && this.distance < this.deep) {
          document.getElementsByClassName('index-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('index-container')[0].style.marginLeft = -innerWidth + 'px'
          setTimeout(() => {
            document.getElementsByClassName('index-container')[0].style.transition = ''
          }, 1000)
        }
      },
      secondmoving (event) {
        this.movingx = event.changedTouches[0].clientX
        this.distance = this.movingx - this.startx 
        if (this.distance > 0) {
          //左滑
          document.getElementsByClassName('index-container')[0].style.marginLeft = (-innerWidth + this.distance) + 'px'
        }
        if (this.distance < 0) {
          //右滑
          document.getElementsByClassName('second-container')[0].style.marginLeft = this.distance + 'px'
        }  
      },
      thirdmoveend (event) {
        this.endx = event.changedTouches[0].clientX
        if (this.distance < -this.deep) {
          //加载右边
          document.getElementsByClassName('third-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('third-container')[0].style.marginLeft = -innerWidth + 'px'
          setTimeout(() => {
            document.getElementsByClassName('third-container')[0].style.transition = ''
          }, 1000)
          this.current = '4'
        }
        else if (this.distance < 0 && this.distance > -this.deep) {
          document.getElementsByClassName('third-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('third-container')[0].style.marginLeft = '0'
          setTimeout(() => {
            document.getElementsByClassName('third-container')[0].style.transition = ''
          }, 1000)
        }
        else if (this.distance > this.deep) {
          //加载左边
          document.getElementsByClassName('second-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('second-container')[0].style.marginLeft = 0
          setTimeout(() => {
            document.getElementsByClassName('second-container')[0].style.transition = ''
          }, 1000)
          this.current = '2'
        }
        else if (this.distance > 0 && this.distance < this.deep) {
          document.getElementsByClassName('second-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('second-container')[0].style.marginLeft = -innerWidth + 'px'
          setTimeout(() => {
            document.getElementsByClassName('second-container')[0].style.transition = ''
          }, 1000)
        }
      },
      thirdmoving (event) {
        this.movingx = event.changedTouches[0].clientX
        this.distance = this.movingx - this.startx 
        if (this.distance > 0) {
          //左滑
          document.getElementsByClassName('second-container')[0].style.marginLeft = (-innerWidth + this.distance) + 'px'
        }
        if (this.distance < 0) {
          //右滑
          document.getElementsByClassName('third-container')[0].style.marginLeft = this.distance + 'px'
        }  
      },
      fourthmoveend (event) {
        this.endx = event.changedTouches.clientX
        if (this.distance > this.deep) {
          document.getElementsByClassName('third-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('third-container')[0].style.marginLeft = '0'
          setTimeout(() => {
            document.getElementsByClassName('third-container')[0].style.transition = ''
          }, 1000)
          this.current = '3'
        }
        else if (this.distance >0 && this.distance < this.deep) {
          document.getElementsByClassName('third-container')[0].style.transition = 'margin-left 1s'
          document.getElementsByClassName('third-container')[0].style.marginLeft = -innerWidth + 'px'
          setTimeout(() => {
            document.getElementsByClassName('third-container')[0].style.transition = ''
          }, 1000)
        }
      },
      fourthmoving (event) {
        this.movingx = event.changedTouches[0].clientX
        this.distance = this.movingx - this.startx
        if (this.distance > 0) {
          //左滑
          document.getElementsByClassName('third-container')[0].style.marginLeft = (-innerWidth + this.distance) + 'px'
        }
      }
  	}
  }
</script>
<style scoped>
.box-container {
  white-space: nowrap;
  overflow: hidden;
  font-size: 0;/*去除inline-block元素间距问题*/
}
.content-img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 72.2%;
  height: 55%;
  z-index: 20;
}
.head-container {
  padding-top: 11.7%;
}
.head-img {
  display: block;
  margin: 0 auto;
}
/*以上为通用样式*/
.index-container {
  background: url('../../assets/images/bg.png');
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.index-head-img {
  width: 20.375rem;
  height: 4.5rem;
}
.cloud1 {
  opacity: 0.8;
  position: absolute;
  width: 6.25rem;
  right: 2.2%;
  top: 50%;
}
.cloud2 {
  opacity: 0.8;
  position: absolute;
  width: 7.3125rem;
  height: 6rem;
  left: 4%;
  bottom: 19%;
}
.cloud3 {
  opacity: 0.8;
  position: absolute;
  width: 15%;
  left: 34%;
  top: 0;
}
.cloud4 {
  opacity: 0.8;
  position: absolute;
  height: 6rem;
  top: -6%;
  right: -5%;
}
.cloud5 {
  opacity: 0.8;
  position: absolute;
  height: 12.8125rem;
  top: 15%;
  left: -22%;
  z-index: 10;
}
.second-container {
  background: url('../../assets/images/bg.png');
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.second-head-img {
  position: relative;
  width: 16.5625rem;
  z-index: 10;
}
.dongman1 {
  position: absolute;
  width: 4.25rem;
  top: 30%;
  left: -1%;
}
.dongman2 {
  position: absolute;
  width: 2.9375rem;
  bottom: 21%;
  left: 6%;
}
.dongman3 {
  position: absolute;
  width: 4.375rem;
  top: 0;
  right: 2%;
}
.dongman4 {
  position: absolute;
  width: 3.25rem;
  right: 2%;
  top: 28%;
}
.third-container {
  background: url('../../assets/images/bg.png');
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.third-head-img {
  width: 16.1875rem;
  height: 4.5rem;
}
.emoji1-1 {
  opacity: 0.8;
  position: absolute;
  width: 6.25rem;
  right: 1.5%;
  top: 50%;
}
.emoji1-2 {
  opacity: 0.8;
  position: absolute;
  width: 4.375rem;
  left: 20%;
  top: -5%;
}
.emoji1-4 {
  position: absolute;
  height: 6.3875rem;
  right: -10%;
  top: -4%;
}
.emoji1-5 {
  opacity: 0.8;
  position: absolute;
  height: 8.75rem;
  top: 22%;
  left: -10%;
}
.emoji1-6 {
  opacity: 0.8;
  position: absolute;
  width: 3.125rem;
  bottom: 22%;
  left: 5%;
}
.fourth-container {
  background: url('../../assets/images/bg.png');
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.fourth-head-img {
  width: 19.1875rem;
  height: 4.5rem;
  z-index: 10;
}
.msg-1 {
  position: absolute;
  width: 5.75rem;
  top: 36%;
  left: -2%;
}
.msg-2 {
  position: absolute;
  width: 3.25rem;
  left: 12%;
  top: 22%;
}
.msg-3 {
  position: absolute;
  width: 2.4375rem;
  top: 0%;
  right: 17%;
}
.msg-4 {
  position: absolute;
  width: 4.5rem;
  right: -3%;
  top: 3%;
}
.msg-5 {
  position: absolute;
  height: 3.75rem;
  bottom: 34%;
  right: 5%;
}
#index {
  background-color: #fb8935;
}
</style>