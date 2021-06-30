const arrayUtils = require('./arrayUtils');

function checkObject (obj) {
    if (typeof(obj) != "object") throw `${obj} is not an object`;
}

function isDeepEqual (obj1, obj2){
    checkObject(obj1);
    checkObject(obj2);
    try {
        arrayUtils.isEqual(Object.keys(obj1),Object.keys(obj2));
    } catch {
        return false;
    }
    for (x in obj1) {
        if (typeof(obj1[x]) != typeof(obj2[x])) return false;
        if (typeof(obj1[x]) == 'object') {
            isDeepEqual(obj1[x],obj2[x]);
        } else if (Array.isArray(obj1[x])){
            arrayUtils.isEqual(obj1[x],obj2[x]);
        } else if (obj1[x] !== obj2[x]){
            return false;
        }
    }
    return true;
}

module.exports = {
    description: "This is the objUtils file for Lab 2",
    makeArrays: (arr) => {
        let output = [];
        if (!Array.isArray(arr)) throw `${arr} is not an array`
        if (arr.length < 2) throw `${arr} does not have at least 2 elements`
        arr.forEach(element => {
            if (typeof(element) != "object") throw `${element} in ${arr} is not an object`
            if (element.length == 0) throw `${element} in ${arr} is an empty object`
            for (i in element) {
                output.push([i,element[i]]);
            }
        });
        return output;
    },
    isDeepEqual,
    computeObject: (object, func) => {
        checkObject(object);
        if (typeof (func) != 'function') throw `${func} is not a function`;
        for (prop in object) {
            object[prop] = func(object[prop]);
        }
        return object;
    }
}