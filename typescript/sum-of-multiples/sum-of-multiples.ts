export default function SumOfMultiples(divizors: number[]): Accumulator {
    return new Accumulator(divizors)
}

class Accumulator {
    private divizors: number[]

    constructor(divizors: number[]) {
        this.divizors = divizors
    }

    public to(limit: number): number {
        return Array(limit).fill(0)
            .map((_, idx) => idx)
            .filter((value) => this.divizors.some((div) => value % div === 0))
            .reduce((sum, value) => sum += value)
    }
}