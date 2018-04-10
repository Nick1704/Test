function prime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
for  (var i = 0; i < 1000; i++) {
    if (prime(i)) console.log(i);
}