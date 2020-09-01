function longVowels(str) {
    var vowels = {
        'a': 'aaa', 'i': 'iii', 'u': 'uuuu', 'h': 'h',
        'e': 'eee', 'o': 'ooo', 'c': 'c', 's': 's'
    }
    let longerVowels = '';
    for(let i = 0 ; i < str.length; i++){
      longerVowels += vowels[str[i]];
    }
    return longerVowels;
}
console.log(longVowels('boot')) //doesnt work the way I want it, I know why though