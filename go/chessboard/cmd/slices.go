package main

import (
    "bytes"
    "fmt"
)

type path []byte

func (p *path) TruncateAtFinalSlash() {
    i := bytes.LastIndex(*p, []byte("/"))

    if i >= 0 {
        *p = (*p)[0:i]
    }
}

func (p path) TruncateAtFinalSlashValue() {
    i := bytes.LastIndex(p, []byte("/"))

    if i >= 0 {
        p = p[0:i]
    }
}


func main() {
    pathName := path("/usr/bin/tso")
    pathName.TruncateAtFinalSlash()
    fmt.Printf("%s\n", pathName)

    pathName.TruncateAtFinalSlashValue()
    fmt.Printf("%s\n", pathName)
}