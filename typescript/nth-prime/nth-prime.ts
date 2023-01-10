class Prime {
    // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
    public nth(n: number): number {
        if (n === 0) {
            throw 'Prime is not possible'
        }

        const limit = this.limit(n)
        const sieve = new Array(limit + 1).fill(true)

        const primes = this.filter(sieve, limit).reduce((primes: number[], current: boolean, index: number) => {
            if (current) {
                primes.push(index)
            }
            return primes
        }, [])

        return primes[n + 1]
    }

    private filter(sieve: boolean[], limit: number): boolean[] {
        let index = 2

        while (index <= Math.sqrt(limit)) {
            if (sieve[index]) {
                let jndex = index * index
                while (jndex < limit) {
                    sieve[jndex] = false
                    jndex += index
                }
            }

            index++
        }

        return sieve
    }

    private limit(n: number): number {
        let result = 0

        if (n >= 7022) {
            result = n * Math.log(n) + n * (Math.log(Math.log(n)) - 0.9385)
        } else if (n >= 6) {
            result = n * Math.log(n) + n * (Math.log(Math.log(n)))
        } else if (n > 0) {
            result = [2, 3, 5, 7, 11][n - 1]
        }

        return Math.ceil(result)
    }
}

export default Prime