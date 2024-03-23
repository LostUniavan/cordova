function verify() {
    let number = document.getElementById('number').value
    let result = document.getElementById('response')
    
    if(isPrime(number)) {
        result.innerHTML = 'o número digitado é primo!'
    } else {
        result.innerHTML = 'o número digitado não é primo!'
    }
    
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        if (num <= 3) {
            return true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            return false;
        }
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }
}
