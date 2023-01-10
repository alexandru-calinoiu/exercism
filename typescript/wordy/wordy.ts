export class ArgumentError extends Error { }

export class WordProblem {
    private readonly tokens: Token[]
    private readonly noop = (_o1: number, _o2?: number) => -1

    private readonly binaryOperations = new Map([
        ['plus', (o1: number, o2: number) => o1 + o2],
        ['minus', (o1: number, o2: number) => o1 - o2],
        ['multiplied', (o1: number, o2: number) => o1 * o2],
        ['divided', (o1: number, o2: number) => o1 / o2],
    ])

    private readonly unaryOperations = new Map([
        ['squared', (o1: number) => o1 * o1],
    ])

    constructor(question: string) {
        this.tokens = this.parse(question)
    }

    public answer(): number {
        if (this.tokens.filter((t) => t instanceof Operation).length === 0) {
            throw new ArgumentError('This is bad, really bad!')
        }

        return this.tokens.reduce((previous: Token, current: Token) => {
            if (current instanceof Operation) {
                current.operand1 = previous
            } else if (previous instanceof BinaryOperation) {
                previous.operand2 = current
                current = previous
            }

            return current
        }).value
    }

    private parse(question: string): Token[] {
        const tokens = new Array<Token>()
        question.substr(0, question.length - 1).split(' ').forEach((token) => {
            switch (token) {
                case this.binaryOperations.has(token) && token:
                    tokens.push(new BinaryOperation(this.binaryOperations.get(token) || this.noop))
                    break
                case this.unaryOperations.has(token) && token:
                    tokens.push(new UnaryOperation(this.unaryOperations.get(token) || this.noop))
                    break
                case /-?\d+/g.test(token) && token:
                    tokens.push(new Scalar(+token))
                    break
            }
        })

        return tokens
    }
}

abstract class Token {
    public abstract get value(): number
}

abstract class Operation extends Token {
    public operand1: Token
}

class Scalar extends Token {
    private readonly _value: number

    constructor(value: number) {
        super()
        this._value = value
    }

    public get value(): number {
        return this._value
    }
}

class BinaryOperation extends Operation {
    public operand2: Token

    private readonly operation: (o1: number, o2: number) => number

    constructor(operation: (o1: number, o2: number) => number) {
        super()
        this.operation = operation
    }

    public get value(): number {
        return this.operation(this.operand1.value, this.operand2.value)
    }
}

class UnaryOperation extends Operation {
    private readonly operation: (o1: number) => number

    constructor(operation: (o1: number) => number) {
        super()
        this.operation = operation
    }

    public get value(): number {
        return this.operation(this.operand1.value)
    }
}