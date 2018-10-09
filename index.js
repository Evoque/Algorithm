var mergeTwoLists = function (l1, l2) {
    if(!l1 || !l1.length) return l2;
    if(!l2 || !l2.length) return l1;
    
    let indexLeft = 0, lenLeft = l1.length,
        indexRight = 0, lenRight = l2.length,
        result = [];
    
    while(indexLeft<l1.length) { 
        // l2 finish, concat l1 left
        if(indexRight >= lenRight) {
            result = result.concat(l1.slice(indexLeft));
            break;
        }
        
        const l1Item = l1[indexLeft];
        const l2Item = l2[indexRight];
        
        if(l1Item < l2Item) {
            result.push(l1Item);
            indexLeft++;
        } 
        else if(l1Item === l2Item){
            result.push(l1Item);
            result.push(l2Item);
            indexLeft++;
            indexRight++;
        } else {
            result.push(l2Item);
            indexRight++;
        }
        
    }
    
    // l1 finish, concat l2 left
    if(indexRight < lenRight-1) {
        result = result.concat(l2.slice(indexRight));
    }
    
    return result;
};

var result = mergeTwoLists([1,2,4], [1,3,4]);

console.log(result);