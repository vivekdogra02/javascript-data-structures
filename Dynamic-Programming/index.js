/**
 * DPs solves time and space complexity
 * DPs will be done when we have overlapping elements and optimal sub-structure.
 */

function fib_memo(n, memo= []) { // It will go for maximum stack exceeded if n is large
    
    if(memo[n] !== undefined) return memo[n];
    if(n<= 2) return 1;
    var res = fib_memo(n-1, memo) + fib_memo(n-2, memo);
    memo[n] = res;
    return res;
}

// Bottm up approach ( it is the best) - It will not go for maximum stack exceeded if n is large
function fib_bottom(n) {
    if(n <=2) return 1;
    var fibNums = [0,1,1];
    for (let i = 3; i <=n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];        
    }
    return fibNums[n];
}