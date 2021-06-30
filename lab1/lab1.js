const questionOne = function questionOne(arr) {
    // prime or nah
    const myObj = {};
    if (!Array.isArray(arr)) return myObj;
    arr.forEach(num => {
        myObj[num] = true;
        if (num == 1) {
            myObj[num] = false;
        }
        const top = Math.sqrt(num);
        for (let i = 2; i <= top; i++)   {
            if (num % i == 0) {
                myObj[num] = false;
                break;
            }
        }
    });
    return myObj;
}

const questionTwo = function questionTwo(arr) { 
    // math stuff
    let ans = arr.reduce((currentValue, newValue) => {
        return currentValue + Math.pow(newValue,2) 
    },0);
    return Math.pow(ans,3);
}

const questionThree = function questionThree(text) {
    // regex
    const charType = {
        "consonants" : 0,
        "vowels" : 0,
        "numbers" : 0,
        "spaces" : 0,
        "punctuation" : 0,
        "specialCharacters" : 0
    };
    const consoRegex = /[b-df-hj-np-tv-z]/gi;
    const vowelRegex = /[aeiou]/gi;
    const numRegex = /[0-9]/g;
    const spaceRegex = / /g;
    const puncRegex = /[.?,-\/\[\]();:\'\"!]/g;
    const specialRegex = /[`~@#$%^&*_+=*-+<>|\\]/g;
    charType.consonants = (text.match(consoRegex) || []).length;
    charType.vowels = (text.match(vowelRegex) || []).length;
    charType.numbers = (text.match(numRegex) || []).length;
    charType.spaces = (text.match(spaceRegex) || []).length;
    charType.punctuation = (text.match(puncRegex) || []).length;
    charType.specialCharacters = (text.match(specialRegex) || []).length;
    return charType;



}

const questionFour = function questionFour(num1, num2,num3) {
    // college debt crisis
    const ir = num2/1200;
    const mp = num3*12;
    return Number.parseFloat(num1*ir*Math.pow(1+ir,mp)/(Math.pow(1+ir,mp)-1)).toFixed(2);
}

module.exports = {
    firstName: "Asif", 
    lastName: "Uddin", 
    studentId: "10427933",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};