const repeatString = function(value, count) {
    if(count < 0) {
        return 'ERROR';
    }
    
    return value.repeat(count);
};

// Do not edit below this line
module.exports = repeatString;
