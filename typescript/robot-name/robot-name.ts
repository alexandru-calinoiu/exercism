export default   class RobotName {
    private static USED_NAMES: Set<string> = new Set()

    private _name: string

    constructor() {
        this.resetName()
    }

    public resetName(): void {
        let name = this._name

        while (RobotName.USED_NAMES.has(name) || name === undefined) {
            name = `${AlphaSerial.data}${NumericSerial.data}`
        }

        RobotName.USED_NAMES.add(name)
        this._name = name
    }

    public get name(): string {
        return this._name
    }
}

class NumericSerial {
    private static readonly MIN = 100
    private static readonly MAX = 999

    public static get data(): number {
        return Math.floor(Math.random() * (NumericSerial.MAX - NumericSerial.MIN)) + NumericSerial.MIN
    }
}

class AlphaSerial {
    private static readonly UPPERCASE_A = 65
    private static readonly UPPERCASE_Z = 90

    public static get data(): string {
        const letter1 = this.randomLetter
        const letter2 = this.randomLetter
        return `${letter1}${letter2}`
    }

    private static get randomLetter(): string {
        const charCode = Math.floor(Math.random() * (AlphaSerial.UPPERCASE_Z - AlphaSerial.UPPERCASE_A)) + AlphaSerial.UPPERCASE_A
        return String.fromCharCode(charCode)
    }
}