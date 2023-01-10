function isLeapYear(value: number): boolean {
    const year = new Year(value)
    return (year.divisibleBy4 && !year.divisibleBy100) || year.divisibleBy400
}

class Year {
    private readonly value: number

    constructor(value: number) {
        this.value = value
    }

    public get divisibleBy4(): boolean {
        return this.value % 4 === 0
    }

    public get divisibleBy100(): boolean {
        return this.value % 100 === 0
    }

    public get divisibleBy400(): boolean {
        return this.value % 400 === 0
    }
}

export default isLeapYear