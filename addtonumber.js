
const theString = ( s )=> {
    let objString = {
        2: s[0]?.length || 0
    }

    for (let i = 0; i < s.length; i++) {
        let temp = s[i]
        for (let j = i + 1; j < s.length; j++) {
            
            if(temp.includes(s[j])  ){
                objString[temp] =  temp.length
                break;
            }
            
            temp += s[j]

            if( j === s.length - 1){
                objString[temp] = temp.length
            }
        }

        if( Math.max( ...Object.values(objString) ) > s.length - i) break;
    }
    return Math.max( ...Object.values(objString) )
}


console.log(theString("bacnhal"))

// abcan

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) return s.length;
    
    let result = 0,
        start = 0,
        lookup = new Set();
    for (let end = 0; end < s.length; end++) {

        while (lookup.has(s[end])) {
            lookup.delete(s[start]);
            start++;
        }  
        lookup.add(s[end]);
        result = Math.max(result, end - start + 1);
    }
    return result;
};

lengthOfLongestSubstring("abcanmm")