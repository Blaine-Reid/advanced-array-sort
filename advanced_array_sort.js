// Advanced Array Sort
// Published by Alex Nemechek in
//   algorithms arrays loops sorting
// Create a function that takes in an array of numbers or strings
// and returns an array with the items from the original array
// stored in subarrays.Items of the same value should be in the
// same subarray.
//   Examples

// advancedSort([2, 1, 2, 1]) ➞[[2, 2], [1, 1]]
// advancedSort([5, 4, 5, 5, 4, 3]) ➞[[5, 5, 5], [4, 4],[3]]
//   advancedSort(["b", "a", "b", "a", "c"]) ➞[["b", "b"],["a","a"],["c"]]

// Notes
// The subarrays should be returned in the order of each element's
// first appearance in the given array.


function advancedSort(array) {
  let sortedArray = [], finalArray = []
  //loop through given array
  array.forEach(value => {
    //if the value is in sorted array
    //add another value to area
    if (sortedArray.indexOf(value) >= 0) {
      sortedArray.splice(sortedArray.indexOf(value), 0, value)
    } else {
      //else push value into array
      sortedArray.push(value)
    }
  })
//loop through sorted array
  for (let i = 0; i < sortedArray.length; i++) {
    //if values don't match
    if (sortedArray[i] !== sortedArray[i + 1]) {
      //splice out matching elements
      let slice = sortedArray.splice(0, i + 1)
      //push into final array
      finalArray.push(slice)
      //reduce iterator by elements spliced out
      i -= slice.length
    }
  }

  return finalArray

}



console.log(
  advancedSort([2, 1, 2, 1]) //➞[[2, 2], [1, 1]]
)
console.log(
  advancedSort([5, 4, 5, 5, 4, 3]) //➞[[5, 5, 5], [4, 4],[3]]
)
console.log(
  advancedSort(["b", "a", "b", "a", "c"]) //➞[["b", "b"],["a","a"],["c"]]
)