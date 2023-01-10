export default class BinarySearchTree {
    public left: BinarySearchTree
    public right: BinarySearchTree
    public readonly data: number

    constructor(rootValue: number) {
        this.data = rootValue
    }

    public insert(value: number): void {
        if (this.data >= value) {
            this.insertLeft(value)
        } else {
            this.insertRight(value)
        }
    }

    public each(fn: (data: number) => void) {
        if (this.left) {
            this.left.each(fn)
        }

        fn(this.data)

        if (this.right) {
            this.right.each(fn)
        }
    }

    private insertLeft(value: number): void {
        if (this.left) {
            this.left.insert(value)
        } else {
            this.left = new BinarySearchTree(value)
        }
    }

    private insertRight(value: number): void {
        if (this.right) {
            this.right.insert(value)
        } else {
            this.right = new BinarySearchTree(value)
        }
    }
}
