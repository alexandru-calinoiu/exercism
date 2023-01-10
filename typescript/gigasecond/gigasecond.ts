export default class Gigasecond {
    private readonly interval = 1000000000
    private readonly startDate: Date

    constructor(date: Date) {
        this.startDate = date
    }

    public date(): Date {
        return new Date(this.startDate.getTime() + this.convertToMiliseconds(this.interval))
    }

    private convertToMiliseconds(minutes: number): number {
        return minutes * 1000
    }
}