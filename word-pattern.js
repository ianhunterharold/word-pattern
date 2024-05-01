/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    // each element in the string(individual letter) represents a word on s 
    // if the pattern is consistent then return true else return false

    // iterate through a split string and then iterate through the s string split as well by space 
    // if there is a value that is already created that is not the same as the s value then you can return false 

    const letters = pattern.split('');
    const words = s.split(' ');

    if (letters.length !== words.length) {
        return false;
    }
    const vals = {}
    let count = 0
    let wordSet = new Set()

    // get count of s unique values 
    for (let j = 0; j < words.length; j++) {
        if (!wordSet.has(words[j])) {
            wordSet.add(words[j])
        }
    }

    for (let i = 0; i < letters.length; i++) {
        let ele = letters[i]
        if (!vals[ele]) {
            vals[ele] = words[i]
        }
    }
    const len = Object.keys(vals).length;

    if (wordSet.size !== len) {
        return false
    }

    let expected = [];
    for (let k = 0; k < letters.length; k++) {
        let el = letters[k];
        expected.push(vals[el])

    }

    const expectedStr = expected.join(' ');

    // find unique vals in s and compare to unique values in pattern
    if (expectedStr !== s) {
        return false
    }
    return true;
};
