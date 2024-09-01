const removeFromArray = function(input, ...toRemove) {
    let result = [];
    let isEqual = false;
    input.forEach(element => {
        toRemove.forEach(item => {
            if(element === item) {
                isEqual = true;
            }
        });

        if(!isEqual) {
            result.push(element);
        }

        isEqual = false;
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
