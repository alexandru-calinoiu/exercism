class Pangram {
    private readonly sentence: String

    constructor(sentence: String) {
        this.sentence = sentence
    }

    public isPangram(): boolean {
        const letters = new Set<string>();

        [...this.sentence.toLowerCase()]
            .filter((element) => /[a-z]/.test(element))
            .forEach((element) => letters.add(element))

        const numberOfLettersInTheEnglistAlphabet = 26
        return letters.size === numberOfLettersInTheEnglistAlphabet
    }
}

export default Pangram
