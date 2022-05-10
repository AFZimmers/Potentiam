<template>
  <div>
    <div class="number" :id="'number-'+number" v-for="number in n()" :key="number" @mouseover="hov(number)" @mouseout="reset">
      {{number}}
    </div>
  </div>
</template>

<script>
export default {
  data()
  {
    return {
      limit: this.$parent.limit,
      numbers: []
    }
  },
  watch: {
    ['$parent.limit'](newLimit)
    {
      this.limit = newLimit;
    }
  },
  methods: {
    n()
    {
      let numbers = [];
      for(var i = 0; i < this.limit; i++)
      {
        numbers = [...numbers, i];
      }
      //Adding O(n) complexity
      return numbers.sort(() => Math.random() - 0.5);
    },
    hov(number)
    {
      const nums = document.querySelectorAll('.number');
      // This original iteration is of O(n) complexity to the number selected which is bad.
      // The number 1 and 2 case will increase the best case scenario to O(1) and will increase the time complexity of average case
      // unfortunately it dont help with the worst case.
      // If it was allowed to be a sorted array complexity could be O(sqrt(n)), i tried to map the array before it was made random
      // how every this didnt lad to an improvement
      if(number === 1)
      {
        for(let i = 0; i < nums.length; i++) {
          const num = nums[i].textContent.trim();
          if (num === "1") {
            nums[i].classList.add('active')
            console.log('divisor', num)
            break;
          }
        }
      }
      else if(number === 2)
      {
        var count=0
        for(let i = 0; i < nums.length; i++) {
          const num = nums[i].textContent.trim();
          if (num === "1" || num === "2" ) {
            nums[i].classList.add('active')
            console.log('divisor', num)
            count++;
            if(count===2){
              break;
            }
          }
        }
      }
      else {
        for(let i = 0; i < nums.length; i++)
        {
          const num = nums[i].textContent.trim();
          if(number % num === 0)
          {
            nums[i].classList.add('active')
            console.log('divisor', num)
          }
        }
      }
    },
    reset()
    {
      const nums = document.querySelectorAll('.number');
      nums.forEach(num => num.classList.remove('active'))
    }
  }
}
</script>

<style scoped>
	.number {
		display: inline-block;
		padding: 5px;
		background-color: lightgrey;
		margin: 5px;
	}

	.active {
		background-color: red;
	}
</style>
