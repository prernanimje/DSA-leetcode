//2622. Cache With Time Limit
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

var TimeLimitedCache = function() {
    this.cache={};
    this.activeKeysCounter = 0;
};
TimeLimitedCache.prototype.set = function(key, value, duration) {
    var keyInCache = this.cache[key];
    keyInCache ? clearTimeout(keyInCache.timeout) : this.activeKeysCounter++;
    
    this.cache[key] = {
      value: value,
      timeout: setTimeout(() => {
        this.cache[key].value = -1;
        this.activeKeysCounter--;
      }, duration),
    }
    return Boolean(keyInCache);
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache[key]?.value || -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.activeKeysCounter;
};