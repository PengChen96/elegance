<template>
	<div id="btnIndex">
		<ripple-btn>波纹按钮</ripple-btn>
	</div>
</template>

<script>
  import rippleBtn from './rippleBtn'
  export default {
    name: 'btnIndex',
    components: {
      'ripple-btn': rippleBtn
    }
  }
</script>

<style lang="less">
	#btnIndex{
		text-align: center;
		margin-top: 200px;
	}
</style>