export default class GradeSchool {
    private dataSource = new Map<string, string[]>()

    public addStudent(name: string, grade: number): void {
        const students = this.dataSource.get(grade.toString()) || []
        this.dataSource.set(grade.toString(), this.quickInsert(students, name))
    }

    public studentRoster(): Map<string, string[]> {
        const result = new Map<string, string[]>()
        this.dataSource.forEach((_value, key) => result.set(key, this.studentsInGrade(+key)))

        return result
    }

    public studentsInGrade(grade: number): string[] {
        const result = this.dataSource.get(grade.toString()) || []
        return new Array(...result)
    }

    private quickInsert(values: string[], toInsert: string): string[] {
        const index = values.findIndex((value) => value > toInsert)
        const first = 0
        const notFound = -1
        let result = []

        switch (index) {
            case first:
                result = new Array(toInsert, ...values)
                break
            case notFound:
                result = new Array(...values, toInsert)
                break
            default:
                result = new Array(...values.splice(index - 1, 0, toInsert))
        }

        return result
    }
}
