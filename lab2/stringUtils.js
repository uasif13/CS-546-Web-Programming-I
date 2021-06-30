function checkString(str) {
    if (typeof(str) != 'string') throw `${str} is not a string`
    if (str.length == 0) throw `${str} is an empty string`
}

module.exports = {
    description: "This is the stringUtils file for Lab 2",
    camelCase: (str) => {
        checkString(str);
        let str_arr = str.split(' ');
        let newStr = '';
        str_arr.forEach((element) => {
            if (newStr === '') {
                newStr += element.substr(0,1).toLowerCase() + element.substr(1)
            } else {
                newStr += element.substr(0,1).toUpperCase() + element.substr(1)
            }
        });
        return newStr;
    },
    replaceChar: (str) => {
        checkString(str);
        let firstChar = str[0];
        let nextReplace = '*';
        for (let i = 1; i < str.length; i++)    {
            if (str[i] == firstChar.toLowerCase() || str[i] == firstChar.toUpperCase())   {
                str = `${str.substr(0,i)}${nextReplace}${str.substr(i+1)}`;
                nextReplace == '*' ? nextReplace = '$' : nextReplace = '*';
            }
        }
        return str;
    },
    mashUp: (str1, str2) => {
        checkString(str1);
        checkString(str2);
        if (str1.length < 2) throw `${str1} is less than 2 characters`
        if (str2.length < 2) throw `${str2} is less than 2 characters`
        return `${str2.substr(0,2)}${str1.substr(2)} ${str1.substr(0,2)}${str2.substr(2)}`
    }
}