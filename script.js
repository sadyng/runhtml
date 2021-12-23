console.log('hello!');

let testElem = document.querySelector('#testElem');

let slow = function (x) {
    alert(x);
    return x;
};

function cachingDecorator(fun) {
    let cache = new Map();

    return function(x){
        if(cache.has(x)) {
            return cache.get(x);
        }
        let result=fun(x);
        cache.set(x, result);
        return result;
    }   
}

slow=cachingDecorator(slow);

console.log(slow(5));   //it will alart 5
console.log(slow(5));   // not alert because cached
