const _value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const _roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
let symbol = "";

function convertToRoman(num, i = 0) {
    if (num == 0)
        return true;

    if(num >= _value[i])    
    {
        symbol += _roman[i];
        convertToRoman(num - _value[i], i );
    }

    if(num < _value[i] )
        convertToRoman(num, i + 1);
}

convertToRoman(500);
console.log(symbol);

