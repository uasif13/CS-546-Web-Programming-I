function checkArray(arr) {
    if (!Array.isArray(arr)) throw `${arr} is not an array`
}

function checkNonEmptyNumArray(arr) {
    checkArray(arr);
    if (arr.length == 0) throw `${arr} is empty`;
    arr.forEach((element) => {
        if (typeof(element) != 'number') throw `${element} in ${arr} is not a number`
        if (isNaN(element)) throw `${element} in ${arr} is NaN`
    });
}

function checkSame(arr) {
    let arrType = typeof(arr[0]);
    for (let i = 0; i < arr.length; i++)   {
        if (typeof(arr[i]) != arrType) throw `${arr} is not homogenous. The array cannot be sorted`
    }
}

module.exports = {
    description: "This is the arrayUtils file for Lab 2",
    mean: (arr) => {
        checkNonEmptyNumArray(arr);
        let sum = 0;
        let count = 0;
        arr.forEach((element) => {
            sum += element;
            count++;
        })
        return sum/count;
    },
    medianSquared: (arr) => {
        checkNonEmptyNumArray(arr);
        arr.sort((a,b) => a - b);
        let len = arr.length;
        if (len % 2 == 0) {
            return Math.pow((arr[len/2]+arr[len/2-1])/2,2);
        } else {
            return Math.pow(arr[(len-1)/2],2);
        }
    },
    maxElement: (arr) => {
        checkNonEmptyNumArray(arr);
        let max_index = 0;
        let max_value = -Infinity;
        let obj = {};
        for (i in arr) {
            if (arr[i] > max_value) {
                max_value = arr[i];
                max_index = i;
            }
        }
        obj[max_value] = parseInt(max_index);
        return obj;
    },
    fill: (end, value=undefined) => {
        if (typeof(end) != 'number') throw `${end} is not a number`
        if (isNaN(end)) throw `${end} is NaN`
        if (end <= 0) throw `${end} is not a positive number`
        let arr = [];
        for (let i = 0; i < end; i++)   {
            if (value==undefined) {
                arr.push(i);
            } else {
                arr.push(value);
            }
        }
        return arr;
    },
    countRepeating: (arr) => {
        checkArray(arr);
        const obj = {};
        arr.forEach((element) => {
            if (obj.hasOwnProperty(element)) {
                obj[element]++;
            }
            else {
                obj[element] = 1;
            }
        });
        for (i in obj)  {
            if (obj[i] == 1) {
                delete obj[i];
            }
        }
        return obj;
    },
    isEqual: (arr1, arr2) => {
        checkArray(arr1);
        checkArray(arr2);
        if (arr1.length != arr2.length) throw `Length of arr1 and arr2 are not equal`
        checkSame(arr1);
        checkSame(arr2);
        let compare = (a,b) => {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        };
        // Array of Arrays
        if (Array.isArray(arr1[0])) {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i].length != arr2[i].length) throw `Length of inner array in array1 and inner array in array2 are not equal`
                arr1[i].sort(compare);
                arr2[i].sort(compare);
                for (let j = 0; j < arr1[i].length; j++) {
                    if (arr1[i][j] !== arr2[i][j]) throw `Inner elements in arr1 and arr2 do not equal each other`;
                }
            }
            return true;
        }
        arr1.sort(compare);
        arr2.sort(compare);
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) throw `Elements do not equal each other`;
        }
        return true;


    }
}