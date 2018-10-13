

/**
 *  Dynamic Programming
 */

/**
 *  top-down with memoization, 带备忘的自顶向下法
 *  按照自然的递归形式编写过程，但过程会保存每个子问题的解。
 */
function memoized_cut_rod(p, n) {
    // let r[0..n] be a new array 
    let resArr = new Array(n + 1).fill(-Number.MAX_VALUE);
    return memoized_cut_rod_aux(p, n, resArr);
}

function memoized_cut_rod_aux(p, n, r) {

    if (r[n] >= 0) return r[n];

    let q = -Number.MAX_VALUE;
    if (n === 0) q = 0;
    else {
        for (let i = 1; i <= n; i++) {
            q = max(q, p[i] + memoized_cut_rod_aux(p, n - i, r))
        }
    }

    r[n] = q;
    return q;
}



/**
 * 
 *  Rn = max(Pi, R1 + Rn-1, R2 + Rn-2, ... Rn-1 + R1)
 *  
 *  `最优子结构(ooptimal substructure)`: 问题的最优解由相关子问题的最优解组合而成，而这些子问题可以独立求解。
 */
  
const p = [, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
function v1(n) { 

    let rn = Math.max(p[n], v1(1) + v1(n - 1), v1(2) + v1(n - 2));

}

/**
 *  给定一个整数 n,
 *  1. 先确认其所有的分割方式，并计算每种分割方式的结果值
 *  2. 对比得到最大的结果值
 */
function getSplitterArray(n) {  
    let result = [[n]];
    for (let i = 1; i < n; i++) { 
        result.push([i, n - i]);
        // let subResult = 
    }
}
// 妈的，不知道 怎么获得所有的分割方式

