# 原生Js实现的图片滑动特效
## V1.0
### 当前为1.0版本，之后的版本会考虑将其抽象为一个复用性强的第三方组件。
虽然使用vue脚手架搭的项目但是核心代码皆是基于原生Js，若要基于vue的transition快速实现一个滑动特效可参考[这个](https://github.com/zhangyuang/ScrollImageByVue)项目
可根据手指的触摸来滑动，当滑动超过设置的距离时会滑动到下一页
<br>
<img src="https://github.com/zhangyuang/ScollImage/blob/master/src/assets/images/scroll2.gif" style="width: 375px,height: 667px">
<br>
当滑动没有超过设置的距离时会返回当前页面
<img src="https://github.com/zhangyuang/ScollImage/blob/master/src/assets/images/scroll1.gif" style="width: 375px,height: 667px">