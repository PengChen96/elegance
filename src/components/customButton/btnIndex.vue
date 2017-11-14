<template>
	<div id="btnIndex">
		<!--<ripple-btn v-on:click.native="test">波纹按钮</ripple-btn>-->
		<ripple-btn v-on:clickEvent=test>波纹按钮</ripple-btn>
	</div>
</template>

<script>
  import rippleBtn from './rippleBtn'
  export default {
    name: 'btnIndex',
    components: {
      'ripple-btn': rippleBtn
    },
    methods: {
      test: function () {
        console.log('test')
      }
    }
  }
</script>

<style lang="less">
	#btnIndex{
	}
</style>