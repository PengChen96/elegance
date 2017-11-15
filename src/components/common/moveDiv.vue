<template>
	<div id="moveDiv">
		<div class="box" id="box" style="position: relative;top:0;left:0;">
			1
		</div>
	</div>
</template>

<script>
  import moveDiv from '@/utils/moveDiv'
  export default {
    name: 'moveDiv',
    mounted: function () {
      let obj = moveDiv.createDiv()
      obj.init(document.getElementById('box'))
    }
  }
</script>

<style lang="less" scoped>
	#moveDiv{
		.box{
			width:100px;
			height:100px;
			background: bisque;
		}
	}
</style>