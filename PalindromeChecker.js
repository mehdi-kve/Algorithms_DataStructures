function removeFunction(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function palindromeChecker(str, s, e)
{
  if (s == e)
    return true;

  if ((str.charAt(s)) != (str.charAt(e)))
    return false;
 
  if (s < e + 1)
    return palindromeChecker(str, s + 1, e - 1);

  return true;
}

function palindrome(str) {
  let string = removeFunction(str);
  return palindromeChecker(string, 0, string.length - 1);
}

console.log(palindrome("1 eye for of 1 eye."));

