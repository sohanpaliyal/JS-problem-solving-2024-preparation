// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// for emaxple this string 'We promptly judged antique ivory buckles for the next prize' has all the letters of alfabets

const str = 'The quick brown fox jumps over the lazy dog';

const getPangram = (str)=>{
    str= str.replace(/\s/g,'').toLowerCase()
    const map = {}
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        map[el] = (map[el] ?? 0) + 1; 
    }

    const aToz = 'abcdefghijklmnopqrstuvwxyz';

    console.log(map)
    for (let i = 0; i < aToz.length; i++) {
        const element = aToz[i];

        if(!map[element]){
            return 'not pangram'
        } 
    }
return 'pangram';
}


console.log(getPangram(str))