/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let num = init
    return {
        increment: () => {
            return num = num + 1;
        },
        reset: () => {
            return num = init;
        },
        decrement: () => {
            return num = num - 1;
        }
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */