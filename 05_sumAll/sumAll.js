const sumAll = function(from, to) {
    if(typeof from === "Number" || typeof to === "Number") {
        return 'ERROR';
    }
    
    if(!Number.isInteger(from) || !Number.isInteger(to)) {
        return 'ERROR';
    }

    if(from < 0 || to < 0) {
        return 'ERROR';
    }
    
    let sum = 0;

    if(to < from) {
        let tmp = to;
        to = from;
        from = tmp;
    }

    for(i = from; i <= to; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
