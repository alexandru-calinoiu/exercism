class Transcriptor {
    private readonly dnaToRnaMap: { [nuleotid: string]: () => string } = {
        C: () => 'G',
        G: () => 'C',
        A: () => 'U',
        T: () => 'A',
        X: () => { throw new RangeError('Invalid input DNA.') },
        U: () => { throw new RangeError('Invalid input DNA.') },
    }

    public toRna(dnaStrand: string): string {
        return [...dnaStrand]
            .map((nucleotid) => this.dnaToRnaMap[nucleotid].call(this))
            .join('')
    }
}

export default Transcriptor