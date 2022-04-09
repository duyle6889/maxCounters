// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    var result = [];
    for(let i = 0; i < N; i++) {
        result[i] = 0;
    }

    var maxValue = 0;
    var maxCounter = 0;
    for(let i = 0; i < A.length; i++) {
        if(A[i] <= N) {
            var counter = result[A[i] - 1];
            if( counter >= maxCounter) {
                result[A[i] - 1] = counter + 1;
            } else {
                result[A[i] - 1] = maxCounter + 1;
            }
            if(maxValue < result[A[i] - 1]) {
                maxValue = result[A[i] - 1];
            }
        } else {
            maxCounter = maxValue;
        }
    }

    for(let i = 0; i < N; i ++) {
        if(result[i] < maxCounter) {
            result[i] = maxCounter;
        }
    }

    return result;
}
