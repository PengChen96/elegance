<template>
  <div class="rippleBtn ripple" v-on:click="$emit('clickEvent')">
  	<slot>自定义按钮</slot>
  </div>
</template>

<script>
  export default {
    name: 'rippleBtn',
    methods: {
      getMousePosition: function () {
        alert('ad')
      }
    }
  }
</script>

<style lang="less" scoped>
	.rippleBtn{
		display: inline-block;
		padding: 6px 12px;
		background: #64bf63;
		font-size: 14px;
		color: #fff;
		border-radius: 4px;
		cursor: pointer;
	}
	.ripple {
    position: relative;
    overflow: hidden;
  }

	.ripple:after {
	  content: "";
	  display: block;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  top: 0;
	  left: 0;
	  /*表示它将捕获不到任何点击*/
	  pointer-events: none;
	  background-image: radial-gradient(circle at center, #666 20%, transparent 20%);
	  /*background-image: radial-gradient(circle at 10% 10%, #333 100%, transparent 100%);*/
	  transform: scale(10, 10);
	  opacity: 0;
	  transition: transform 0.8s, opacity 0.6s;
	}

	.ripple:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    /*点上去透明度瞬间0.3*/
    transition: 0s;	
	}
</style>