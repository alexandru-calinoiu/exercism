export default class Squares {
    private readonly array: ReadonlyArray<number>

    constructor(value: number) {
        this.array = [...Array(value).keys()]
            .map((value) => value + 1)
    }

    public get squareOfSums(): number {
        return Math.pow(this.sum((v) => v), 2)
    }

    public get sumOfSquares(): number {
        return this.sum((v) => Math.pow(v, 2))
    }

    public get difference(): number {
        return this.squareOfSums - this.sumOfSquares
    }

    private sum(fn: (value: number) => number): number {
        return this.array.reduce((acc, value) => acc + fn(value), 0)
    }
}
