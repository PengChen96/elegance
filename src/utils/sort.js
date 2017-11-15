
let QuickSort = {
  // 平均时间复杂度：O(nlog2n) 不稳定
  basic: function (arr, _left, _right) {
    // debugger
    let left = _left
    let right = _right
    let temp = 0       // 基准值
    if (left <= right) {
      temp = arr[left]
      while (left !== right) {
        while (right > left && arr[right] >= temp) {
          right--
        }
        arr[left] = arr[right]
        while (left < right && arr[left] <= temp) {
          left++
        }
        arr[right] = arr[left]
      }
      arr[right] = temp
      this.basic(arr, _left, left - 1)
      this.basic(arr, right + 1, _right)
    }
  }
}

let SelectionSort = {
  // 平均时间复杂度：O(n2) 不稳定
  basic: function (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
//    console.log(arr)
    }
  }
}

export {
  QuickSort, SelectionSort
}
