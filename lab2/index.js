const arrayUtils = require('./arrayUtils');
const objUtils = require('./objUtils');
const stringUtils = require('./stringUtils');

// arrayUtils mean (pass)
try {
    console.log(arrayUtils.mean([1, 2, 3, 4])); // Returns: 2
} catch (e){
    console.log(e)
}

// arrayUtils mean (fail)
try {
    console.log(arrayUtils.mean([])); // throws an error
} catch (e){
    console.log(e)
}
// arrayUtils median squared (pass)
try {
    console.log(arrayUtils.medianSquared([1, 2, 3, 4])); // Returns: 6.25
} catch (e){
    console.log(e)
}

// arrayUtils median squared (fail)
try {
    console.log(arrayUtils.medianSquared(["guitar", 1, 3])); // throws an error
} catch (e){
    console.log(e)
}

// arrayUtils maxElement (pass)
try {
    console.log(arrayUtils.maxElement([1,4,7,6,3])); // Returns: {'7', 2}
} catch (e){
    console.log(e)
}

// arrayUtils maxElement (fail)
try {
    console.log(arrayUtils.maxElement([1,4,7,6,"guitar"])); // throws an error
} catch (e){
    console.log(e);
}

// arrayUtils fill (pass)
try {
    console.log(arrayUtils.fill(3,"Asif")); // Returns: ["Asif", "Asif", "Asif"]
} catch (e) {
    console.log(e);
}

// arrayUtils fill (fail)
try {
    console.log(arrayUtils.fill("Asif")); // throws an error
} catch (e) {
    console.log(e);
}

// arrayUtils countRepeating (pass)
try {
    console.log(arrayUtils.countRepeating([7, '13', 13, false, true, false, "Goodbye","Hello", "Goodbye"])); // Returns { '13': 2, false: 2, Goodbye: 2 }
} catch (e) {
    console.log(e);
}

//arrayUtils countRepeating (fail)
try {
    console.log(arrayUtils.countRepeating("[7, '13', 13, false, true, false]")); // Throws an error
} catch (e) {
    console.log(e);
}

// arrayUtils isEqual (pass) NEED TO DO
try {
    console.log(arrayUtils.isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 8 ]])) // Returns true
} catch (e) {
    console.log(e)
}

// arrayUtils isEqual (fail) NEED TO DO
try {
    console.log(arrayUtils.isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 11 ], [ 9, 7, 8 ]])) // Throws an error
} catch (e) {
    console.log(e)
}

// stringUtils camelCase (pass)
try {
    console.log(stringUtils.camelCase('Make me into a camel'));
} catch (e) {
    console.log(e);
}

// stringUtils camelCase (fail)
try {
    console.log(stringUtils.camelCase(['I',"don't",'work']));
} catch (e) {
    console.log(e);
}

// stringUtils replaceChar (pass)
try {
    console.log(stringUtils.replaceChar("Sally has seven seals"));
} catch (e) {
    console.log(e);
}

// stringUtils replaceChar (fail) 
try {
    console.log(stringUtils.replaceChar(101));
} catch (e) {
    console.log(e);
}

// stringUtils mashUp (pass)
try {
    console.log(stringUtils.mashUp("Asif", "Uddin")); // throws an error
} catch (e){
    console.log(e);
}

// stringUtils mashUp (fail)
try {
    console.log(stringUtils.mashUp("I", "fail")); // throws an error
} catch (e){
    console.log(e);
}

// objUtils makeArrays (pass)
try {
    console.log(objUtils.makeArrays([{'a':1,'b':2,'c':3},{'d':4,'a':1,'b':2}])) // Returns [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'a', 1 ], [ 'b', 2 ] ]
} catch (e) {
    console.log(e);
}

// objUtils makeArrays (fail)
try {
    console.log(objUtils.makeArrays([{'a':1,'b':2,'c':3}]));
} catch (e) {
    console.log(e);
}

// objUtils isDeepEqual (pass)
try {
    const obj1 = {a: {e: "Howdy", f: "Y'all"}, b: 39, c: false, d: "Weird"}
    const obj2 = {b: 39, c: false, a: {e: "Howdy", f: "Y'all"}, d: "Weird"}
    console.log(objUtils.isDeepEqual(obj1, obj2))
} catch (e) {
    console.log(e);
}

// objUtils isDeepEqual (fail)
try {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: {e: "Howdy", f: "Y'all"}, b: 39, c: false, d: "Weird"}
    console.log(objUtils.isDeepEqual(obj1, obj2))
} catch (e) {
    console.log(e);
}

// objUtils computeObject (pass)
try {
    console.log(objUtils.computeObject({ a: "You are ", b: "We are ", c: "I am " }, n => `${n}the best`)) // Returns { a: 'You are the best', b: 'We are the best', c: 'I am the best' }
} catch (e) {
    console.log(e);
}
// objUtils computeObject (fail)
try {
    console.log(objUtils.computeObject({ a: "You are ", b: "We are ", c: "I am " }, "the best"))
} catch (e) {
    console.log(e);
}