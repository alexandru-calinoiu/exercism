package main

import "fmt"

func main() {
    myString := "❗hello"

    for index, char := range myString {
        fmt.Printf("Index: %d, Character: %c, Type: %T, Code Point: %U\n", index, char, char, char)
    }
}