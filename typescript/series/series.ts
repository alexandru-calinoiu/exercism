class ArgumentError extends Error {
}

export default class Series {
    private readonly input: string

    constructor(input: string) {
        this.input = input
    }

    public get digits(): number[] {
        return this.input.split('').map((d) => +d)
    }

    public slices(n: number): number[][] {
        if (n > this.input.length) {
            throw new ArgumentError()
        }

        const result = new Array<number[]>()
        this.digits.forEach((_, index) => {
            if (index + n <= this.input.length) {
                result.push(this.digits.slice(index, index + n))
            }
        })

        return result
    }
}