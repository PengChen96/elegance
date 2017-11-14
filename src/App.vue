<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="container">
    	<div class="appNav">
    		<ul>
    			<router-link tag="li" to="/">首页</router-link>
    			<router-link tag="li" to="/button">Button</router-link>
    		</ul>
    	</div>
    	<div class="routerView">
	    	<router-view/>
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  .container{
		display:flex;
  	position: absolute;
  	width: 100%;
  	height:100%;
  	overflow:hidden;
  	.appNav{
  		width:200px;
  		height:100%;
  		/*border-right: 1px solid #ccc;*/
  		box-shadow: 2px 0 8px 0 #ccc;
  		/*background: #fdfdfd;*/
  		ul{
  			list-style: none;
  			padding: 0;
  			margin: 0;
  			li{
  				padding:0 12px;
  				height:36px;
  				line-height: 36px;
  				background: #fff;
  				color:#333;
  				cursor: pointer;
  			}
  			li:hover{
  				background: #eee;
  			}
  		}
  	}
  	.routerView{
  		width:calc(~"100% - 224px");
  		height:100%;
  		padding: 12px;
  	}
  }
}
</style>
