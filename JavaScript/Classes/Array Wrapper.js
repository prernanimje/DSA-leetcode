//2695. Array Wrapper
// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

var ArrayWrapper = function(nums) {
    this.array = nums
};

/**
* @return {number}
*/
ArrayWrapper.prototype.valueOf = function() {
     return this.array.reduce((pre, cur)=>pre+cur,0)
}

/**
* @return {string}
*/
ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.array)
}
