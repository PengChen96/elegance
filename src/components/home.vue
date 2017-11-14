<template>
	<div id="home">
		<div class="nav">
			<button v-on:click="show = !show">IMG</button>
		</div>
	  <transition name="bounce"
	  	enter-active-class="animated fadeInDown"
    	leave-active-class="animated fadeOutDown">
	    <Beautiful v-if="show">Look at me!</Beautiful>
	  </transition>
	</div>
</template>

<script>
  import Beautiful from '@/components/beautiful/beautiful'
  export default {
    name: 'home',
    components: {
      Beautiful
    },
    data () {
      return {
        timer: null,
        show: false
      }
    },
    created: function () {
      this.timer = setTimeout(() => {
        this.show = true
      }, 100)
      let promise = new Promise(function (resolve, reject) {
        console.log('Promise')
        resolve()
      })
      promise.then(function () {
        console.log('resolved.')
      })
      console.log('Hi!')
    }
  }
</script>

<style>
	#home{
		background: bisque;
	}
</style>