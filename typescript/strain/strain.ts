type Predicate<T> = (e: T) => boolean

export function keep<T>(array: T[], predicate: Predicate<T>): T[] {
    const result: T[] = []

    array.forEach((element) => {
        if (predicate(element)) {
            result.push(element)
        }
    })

    return result
}

export function discard<T>(array: T[], predicate: Predicate<T>): T[] {
    return keep(array, (e) => !predicate(e))
}
