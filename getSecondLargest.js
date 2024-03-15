function getSecondLargest(nums) {
  // Complete the function
  // Remove duplicates
  nums = [...new Set(nums)]
  nums.sort(function (a, b) {
    console.log(a, b)
    return a - b
  })
  console.log(nums)
  console.log(nums[nums.length - 2])
}

getSecondLargest([2, 3, 6, 6, 5])
