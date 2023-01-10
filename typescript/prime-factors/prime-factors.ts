// https://en.wikipedia.org/wiki/Prime_factor
export function calculatePrimeFactors(value: number): number[] {
    if (value === 1) {
        return []
    }

    let factor = factorize(value)
    const tree = isPrime(factor, value) ? [factor] : [factor, value / factor]
    let index = 0
    const result = []

    while (index < tree.length) {
        const current = tree[index]
        factor = factorize(current)

        if (isPrime(current, factor)) {
            result.push(factor)
        } else {
            tree.push(factor, current / factor)
        }

        index++
    }

    return result.sort((a, b) => a - b)
}

function isPrime(value: number, factor: number) {
    return factor === value
}

// https://en.wikipedia.org/wiki/Pollard's_rho_algorithm
export function factorize(value: number): number {
    if (value % 2 === 0) { return 2 }
    if (value % 5 === 0) { return 5 }
    const g = (x: number, value: number) => (x * x + 1) % value
    let x = 2
    let y = 2
    let factor = 1

    while (factor === 1) {
        x = g(x, value)
        y = g(g(y, value), value)
        factor = gcd(Math.abs(x - y), value)
    }

    return factor
}

// https://en.wikipedia.org/wiki/Euclidean_algorithm
export function gcd(value1: number, value2: number): number {
    return value2 === 0 ? value1 : gcd(value2, value1 % value2)
}