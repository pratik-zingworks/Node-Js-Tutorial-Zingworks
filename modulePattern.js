var Count = function(arr){
    return `There're ${arr.length} elements in this aaray`
}

var Add = function(x, y){
    return `Addition of ${x} & ${y} is ${x + y}`
}

// module.exports.arrayCount = Count
// module.exports.addTwoNumbers = Add

//or

// module.exports.arrayCount = function(arr){
//     return `There're ${arr.length} elements in this aaray`
// }

// module.exports.addTwoNumbers = function(x, y){
//     return `Addition of ${x} & ${y} is ${x + y}`
// }

// or

module.exports = {
    addTwoNumbers : Add,
    arrayCount : Count,
}
