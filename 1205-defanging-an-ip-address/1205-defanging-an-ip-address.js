/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    res = "" ;
    for(let char of address){
        if(char == "."){
            res += `[${char}]`
        }else{
            res += char
        }

    }
    return res
};