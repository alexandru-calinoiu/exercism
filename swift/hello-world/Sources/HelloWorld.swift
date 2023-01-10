//Solution goes in Sources

class HelloWorld {
    class func hello(_ name: String = String()) -> String {
        return name.isEmpty ? "Hello, World!" : "Hello, \(name)!"
    }
}
