//2665. Counter II
//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

var createCounter = function(init) {
    var presentcount=init;
  
    function increment(){
      return ++presentcount;
    }
    function decrement(){
      return --presentcount;
    }
    function reset(){
      return (presentcount=init);
    }
  
    return {increment,decrement,reset};
  };