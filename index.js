let uniqueArr = []

function removeArrayDuplicates(arr){
    // Accepts an array from which the duplicates
    // will be removed
    if (!Array.isArray(arr)){  
        arr = []
    }

    let theSet = new Set(arr)
    let uniqueArr = [...theSet]
    return uniqueArr
}

// Testing Only
// let myNums = [1,2,3,1,4,1,2,5,3,4]
// let uniqueNums = removeArrayDuplicates(myNums)
// console.log(uniqueNums)

module.exports = removeArrayDuplicates