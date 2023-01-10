import { isUndefined } from "util"

export default class LinkedList<T> {
    private head: Node<T>
    private tail: Node<T>

    public push(value: T): void {
        if (this.requiresInit()) {
            this.init(value)
        } else {
            const newNode = new Node({ value, left: this.tail })
            this.tail.right = newNode
            this.tail = newNode
        }
    }

    public pop(): T {
        const last = this.tail
        this.tail = last.left
        return last.value
    }

    public shift(): T {
        const first = this.head
        this.head = this.head.right
        return first.value
    }

    public unshift(value: T) {
        if (this.requiresInit()) {
            this.head = new Node({ value })
            this.tail = this.head
        } else {
            const newNode = new Node({ value, right: this.head })
            this.head.left = newNode
            this.head = newNode
        }
    }

    public count(): number {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.right
        }

        return count
    }

    public delete(value: T): void {
        let lastNode = this.head
        let node = lastNode.right

        while (node && node.value !== value) {
            lastNode = node
            node = node.right
        }

        if (lastNode.value === value) {
            this.head = this.tail = node
        } else if (!isUndefined(node) && node.value === value) {
            lastNode.right = node.right
            node.right.left = lastNode
        }
    }

    private requiresInit(): boolean {
        return this.head === undefined || this.tail === undefined
    }

    private init(value: T): void {
        this.head = new Node({ value })
        this.tail = this.head
    }
}

class Node<T> {
    public readonly value: T
    public left: Node<T>
    public right: Node<T>

    constructor(args?: Partial<Node<T>>) {
        Object.assign(this, args)
    }
}
