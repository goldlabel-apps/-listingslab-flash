let uniqueArr = []
function uniqifyArr(arr){
    if (!Array.isArray(arr)){  
        arr = []
    }
    let theSet = new Set(arr)
    let uniqueArr = [...theSet]
    return uniqueArr
}

// Tests 
let myNums = [1,2,3,1,4,1,2,5,3,4]
let uniqueNums = uniqifyArr(myNums)
console.warn(uniqueNums)

module.exports = uniqifyArr