

/**
 *  Dynamic Programming
 */

/**
 *  top-down with memoization, 带备忘的自顶向下法
 *  按照自然的递归形式编写过程，但过程会保存每个子问题的解。
 */
// function memoized_cut_rod(p, n) {
//     // let r[0..n] be a new array 
//     let resArr = new Array(n + 1).fill(-Number.MAX_VALUE);
//     return memoized_cut_rod_aux(p, n, resArr);
// }

// function memoized_cut_rod_aux(p, n, r) {

//     if (r[n] >= 0) return r[n];

//     let q = -Number.MAX_VALUE;
//     if (n === 0) q = 0;
//     else {
//         for (let i = 1; i <= n; i++) {
//             q = max(q, p[i] + memoized_cut_rod_aux(p, n - i, r))
//         }
//     }

//     r[n] = q;
//     return q;
// }



/**
 * 
 *  Rn = max(Pi, R1 + Rn-1, R2 + Rn-2, ... Rn-1 + R1)
 *  
 *  `最优子结构(ooptimal substructure)`: 问题的最优解由相关子问题的最优解组合而成，而这些子问题可以独立求解。
 */

const p = [, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
/**
 *  不用列出所有的分割情况，根据(i, n-i) 进行循环递归
 */
function top_down_normal(n) {

    let val = p[n];
    for (let i = 1; i < n; i++) {
        const ri = top_down_normal(i);
        const rn_i = top_down_normal(n - i);
        if (ri + rn_i > val) {
            val = ri + rn_i;
        }
    }
    return val;
}

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i => {
    const result = top_down_normal(i);
    console.log(result);
});


/**
 *  给定一个整数 n,
 *  1. 先确认其所有的分割方式，并计算每种分割方式的结果值
 *  2. 对比得到最大的结果值
 */
// function getSplitterArray(n) {  
//     let result = [[n]];
//     for (let i = 1; i < n; i++) { 
//         result.push([i, n - i]);
//         // let subResult = 
//     }
// }
// 妈的，不知道 怎么获得所有的分割方式




/**
 *  我们将钢条从最左边切割下长度为i的一段，只对右边剩下的长度为`n-i`的一段继续进行切割(递归求解)，对左边的一段则不再进行切割。
 * 即问题分解的方式为：将长度为n的钢条分解为左边开始一段，以及剩余部分继续分解的结果。 
 */
// function cut_rod(p, n) { 
//     if (n === 0) return 0;
//     let q = -Math.MAX_VALUE;

//     for (let i = 1; i <= n; i++) { 
//         q = Math.max(q, p[i] + cut_rod(p, n - i));
//     }
//     return q;
// }