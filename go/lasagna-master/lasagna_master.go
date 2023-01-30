package lasagna

func PreparationTime(layers []string, preparationTimePerLayer int) int {
    if preparationTimePerLayer == 0 {
        preparationTimePerLayer = 2
    }

    return len(layers) * preparationTimePerLayer
}

func Quantities(layers []string) (noodles int, sauce float64) {
    for _, layer := range layers {
        if layer == "noodles" {
            noodles += 50
        } else if layer == "sauce" {
            sauce += 0.2
        }
    }

    return
}

func AddSecretIngredient(friendsIngredients, myIngerdients []string) {
    myIngerdients[len(myIngerdients) - 1] = friendsIngredients[len(friendsIngredients) - 1]
}

func ScaleRecipe(quantities []float64, numberOfPortions int) []float64 {
    result := make([]float64, len(quantities))
    for i, _ := range quantities {
        result[i] =  quantities[i] * (float64(numberOfPortions) / 2)
    }

    return result
}
