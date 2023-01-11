package purchase

import (
	"fmt"
	"strings"
)

const carType = "car"
const truckType = "truck"

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	return kind == carType || kind == truckType
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
	var theChoice string

	if strings.Compare(option1, option2) == -1 {
		theChoice = option1
	} else {
		theChoice = option2
	}

	return fmt.Sprintf("%s is clearly the better choice.", theChoice)
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	var discountPercent float64

	if age < 3 {
		discountPercent = 80
	} else if age >= 10 {
		discountPercent = 50
	} else {
		discountPercent = 70
	}

	return originalPrice * discountPercent / 100
}
