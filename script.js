let map=new Map();
let obj={a:1};
map.set(obj,"teststr");
map.set("key1","teststr2")
console.log(map.get(obj),map.get("key1")) //teststr teststr2

let john = { name: "John" };
let ben = { name: "Ben" };
let visitsCountObj = {}; // try to use an object
visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced
// That's what got written!
console.log(( visitsCountObj)); //{[object Object]: 123}

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
//create map from obj
obj = {
  name: "John",
  age: 30
};
map = new Map(Object.entries(obj));
console.log( map.get('name') ); // John
//create obj from map
map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
obj = Object.fromEntries(map.entries()); // make a plain object (*)
console.log(obj); // // obj = { banana: 1, orange: 2, meat: 4 }
obj = Object.fromEntries(map); // omit .entries()

let set = new Set();
john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log( set.size ); // 3
for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}