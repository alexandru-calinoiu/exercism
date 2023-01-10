class AnswerFactory {
    public static create(value: string): Sentence {
        if (this.isSilence(value)) {
            return new Silence()
        } else if (this.isShouting(value) && !this.isOnlyNumbers(value)) {
            return new Shouting()
        } else if (this.isQuestion(value)) {
            return new Question()
        }

        return new Sentence()
    }

    private static isShouting(value: String): boolean {
        return value === value.toUpperCase()
    }

    private static isOnlyNumbers(value: string): boolean {
        return /^([1-4],?\s?\??)+$/g.test(value)
    }

    private static isQuestion(value: string): boolean {
        return value.endsWith('?')
    }

    private static isSilence(value: string): boolean {
        return value.trim() === ''
    }
}

class Sentence {
    answer: string = 'Whatever.'
}

class Shouting implements Sentence {
    get answer(): string {
        return 'Whoa, chill out!'
    }
}

class Question implements Sentence {
    get answer(): string {
        return 'Sure.'
    }
}

class Silence implements Sentence {
    get answer(): string {
        return 'Fine. Be that way!'
    }
}

class Bob {
    hey(message: string): string {
        return AnswerFactory.create(message).answer
    }
}

export default Bob