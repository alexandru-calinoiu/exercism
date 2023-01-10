import { calculatePrimeFactors, gcd, factorize } from './prime-factors'

describe('calculatePrimeFactors', () => {
  it('factorize big number', () => {
    expect(factorize(8051)).toBe(97)
  })

  it('factorize of prime', () => {
    expect(factorize(5)).toEqual(5)
  })

  it('factorize even number', () => {
    expect(factorize(4)).toEqual(2)
  })

  it('factorize odd number', () => {
    expect(factorize(15)).toEqual(5)
  })

  it('calculates gcm', () => {
    expect(gcd(1071, 462)).toEqual(21)
  })

  it('returns an empty array for 1', () => expect(calculatePrimeFactors(1)).toEqual([]))

  it('factors 2', () => expect(calculatePrimeFactors(2)).toEqual([2]))

  it('factors 3', () => expect(calculatePrimeFactors(3)).toEqual([3]))

  it('factors 4', () => expect(calculatePrimeFactors(4)).toEqual([2, 2]))

  it('factors 6', () => expect(calculatePrimeFactors(6)).toEqual([2, 3]))

  it('factors 8', () => expect(calculatePrimeFactors(8)).toEqual([2, 2, 2]))

  it('factors 9', () => expect(calculatePrimeFactors(9)).toEqual([3, 3]))

  it('factors 27', () => expect(calculatePrimeFactors(27)).toEqual([3, 3, 3]))

  it('factors 625', () => expect(calculatePrimeFactors(625)).toEqual([5, 5, 5, 5]))

  it('factors 901255', () => expect(calculatePrimeFactors(901255)).toEqual([5, 17, 23, 461]))

  it('factors 93819012551', () => expect(calculatePrimeFactors(93819012551)).toEqual([11, 9539, 894119]))
})