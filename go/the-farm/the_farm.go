package thefarm

import (
    "errors"
    "fmt"
)

// See types.go for the types defined for this exercise.

var negativeFodder = errors.New("negative fodder")
var divisionByZero = errors.New("division by zero")

// TODO: Define the SillyNephewError type here.

type SillyNephewError struct {
    count int
}

func NewSillyNephewError(count int) *SillyNephewError {
    return &SillyNephewError{
        count: count,
    }
}

func (e *SillyNephewError) Error() string {
    return fmt.Sprintf("silly nephew, there cannot be %d cows", e.count)
}

// DivideFood computes the fodder amount per cow for the given cows.
func DivideFood(weightFodder WeightFodder, cows int) (float64, error) {
    amount, err := weightFodder.FodderAmount()

    switch err {
    case ErrScaleMalfunction:
        amount *= 2
        err = nil
    case nil: {}
    default: amount = 0
    }

    if amount <  0 {
        return 0, negativeFodder
    }
    
    if cows < 0 {
        return 0, NewSillyNephewError(cows)
    }

    if cows == 0 {
        return 0, divisionByZero
    }

    return amount / float64(cows), err
}
