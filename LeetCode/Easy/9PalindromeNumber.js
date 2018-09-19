var isPalindrome = function(x) {
    
    const xStr = x.toString();
    // 数字长度为偶数，not palindrome
    const len = x.toString().length; 
    if(len === 1) return true;
        
    const halfLen = Math.floor(len/2);
    const pre = xStr.substring(0, halfLen);
    const suf = xStr.substring(halfLen + 1);
        
    let result = true;
    for(let i=0; i<halfLen; i++){
        const pi = pre[i];
        const si = suf[suf.length - i - 1];
        if(pi !== si){
            result = false;
            break;
        }
    }
    return result;
};

var a = isPalindrome(11);
var b = "";