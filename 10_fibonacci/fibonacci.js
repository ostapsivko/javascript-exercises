const fibonacci = function(number) {
    let base0 = 0; let base1 = 1;
    let end = Number(number);

    if(end < 0) {
        return 'OOPS';
    }else if(end === 0) {
        return base0;
    } else if(end === base1) {
        return base1;
    }

    return fibonacci(end - 1) + fibonacci(end - 2);
};

// Do not edit below this line
module.exports = fibonacci;
