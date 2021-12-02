/* Custom indexOf */

Array.prototype.customIndexOf = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == value)
            return i;        
    }
    return -1;
}

/* Custom forEach */

Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}


/* Custom map */

Array.prototype.customMap = function map(callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(callback(this[i], i, this));
    }
    return results;
}

/* Custom filter */

Array.prototype.customFilter = function (callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
            results.push(this[i]);
    }
    return results;
}

/* Custom reduce */

Array.prototype.customReduce = function (callback, initialValue) {
    let value = initialValue;

    for (let i = 0; i < this.length; i++) {
        value = callback(value, this[i]);
    }

    return value;
}

module.exports = Array;