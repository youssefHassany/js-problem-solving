var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n > 1) {
        let sequence = [0, 1];
        let nextNum;
        for (let i = 2; i <= n; i++) {
            nextNum = sequence[i - 1] + sequence[i - 2];
            sequence = [...sequence, nextNum];
        }

        return sequence[sequence.length - 1]
    }
};