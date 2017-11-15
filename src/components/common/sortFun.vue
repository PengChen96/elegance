<template>
	<div id="sortFun">
		<div>
			<button v-for="x in QSArr">{{x}}</button>
			<button v-on:click="quickSort">快速排序</button>
		</div>
		<div>
			<button v-for="x in SSArr">{{x}}</button>
			<button v-on:click="selectionSort">选择排序</button>
		</div>
	</div>
</template>

<script>
  import {QuickSort, SelectionSort} from '@/utils/sort'
  export default {
    name: 'sortFun',
    data () {
      return {
        arr: [],
        QSArr: [],
        SSArr: []
      }
    },
    created: function () {
      for (let i = 0; i < 10; i++) {
        this.arr.push(Math.ceil(Math.random() * 1000))
      }
      this.QSArr = this.arr.slice(0)
      this.SSArr = this.arr.slice(0)
    },
    methods: {
      quickSort: function () {
        QuickSort.basic(this.QSArr, 0, this.QSArr.length - 1)
        this.QSArr = this.QSArr.slice(0)
//      this.arr = JSON.parse(JSON.stringify(this.arr))
      },
      selectionSort: function () {
        SelectionSort.basic(this.SSArr)
        this.SSArr = this.SSArr.slice(0)
      }
    }
  }
</script>

<style>
</style>