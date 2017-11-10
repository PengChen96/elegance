<template>
	<!--<div class="rippleBtn">
		<slot>自定义按钮</slot>
	</div>-->
	<div>
    <div class="rippleBtn ripple">Button</div>
    <div class="rippleBtn ripple">Button with very long content</div>
	</div>
</template>

<script>
  export default {
    name: 'rippleBtn'
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
	  background-image: radial-gradient(circle, #333 10%, transparent 10%);
	  transform: scale(10, 10);
	  opacity: 0;
	  transition: transform 0.3s, opacity 0.5s;
	}

	.ripple:active:after {
    transform: scale(1, 1);
    opacity: 0.2;
    /*点上去透明度瞬间0.3*/
    transition: 0s;	
	}
</style>