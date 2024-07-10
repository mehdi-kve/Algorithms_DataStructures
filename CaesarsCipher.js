const _alphabet = ['A','B','C','D','E','F','G','H','I','J','K', 
    'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

function caesarDecoder(char)
{
    for (let i = 0; i < _alphabet.length; i++) {
        if(char == _alphabet[i]){
            if (i - 13 < 0)
                return _alphabet[(((i - 13) % 26) + 26) % 26];
            return _alphabet[(i - 13) % 26];
        }       
    }

    return char;
}

function rot13(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {
        
        result += caesarDecoder(str.charAt(i));
    }

    return result;
}
  
let r = rot13("SERR PBQR PNZC");
console.log(r);