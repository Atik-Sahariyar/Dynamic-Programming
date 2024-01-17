/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
          return s;
      }
       
  const check = (i, j, s) => {
      let left = i;
      let right = j - 1;

      while(left < right){
          if(s[left] !== s[right]){
              return false
          }
          left++;
          right--
      }
      return true;
  }

  for(let l = s.length;  l > 0; l--){
      for(let start = 0; start <= s.length - l; start++){
          if(check(start, start + l, s)){
              return s.substring(start, start + l);
          }
      }
  }
};