export const task1 = arr => {
    if (!(arr instanceof Array)) return 'Invalid type'
    let result = arr[0];
    arr.forEach(el => {
        if (el.length > result.length) result = el;
    })
    return result;
}

export const task2 = text => {
    let charObj = {};
    let maxCharValue = 0;
    let maxChar = '';

    for (let char of text) {
        if (charObj.hasOwnProperty(char)) {
            charObj[char]++
        } else {
            charObj[char] = 1
        }
    }

    for (let char in charObj) {
        if (charObj[char] > maxCharValue) {
            maxCharValue = charObj[char]
            maxChar = char
        }
    }

    return maxChar
}

export const task3 = (text, userChar) => {
    let charObj = {};
    let maxCharValue = 0;
    let maxChar = '';

    for (let char of text) {
        if (charObj.hasOwnProperty(char)) {
            charObj[char]++
        } else {
            charObj[char] = 1
        }
    }

    for (let char in charObj) {
        if (charObj[char] > maxCharValue) {
            maxCharValue = charObj[char]
            maxChar = char
        }
    }

    return text.replaceAll(maxChar, userChar);
}

export const task4 = (str1, str2) => {
    const sortedStr1 = str1.toLowerCase().split("").sort().join("");
    const sortedStr2 = str2.toLowerCase().split("").sort().join("");
    return sortedStr1 === sortedStr2
}
