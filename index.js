var countAndSay = function(n) { 
    let result = '1', counter = 1; 

    while(counter < n) {
        
        let subCounter=0; 
        let sub = result[0];
        let curResult = '';
        for(let i=0; i<result.length; i++){
 
            if(result[i] === sub) subCounter++;
            else {
                curResult += subCounter + sub;
                subCounter=1;
                sub=result[i];
            }

            if(i === result.length-1) curResult += subCounter + sub;
            
        }
        result = curResult;
        counter++;
    }
    
    
    return result;
};

var result = countAndSay(5);
console.log(result);