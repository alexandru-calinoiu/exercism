package elon

import "fmt"

// Drive updates the number of meters driven
func (c *Car) Drive() {
    var batteryRemaining = c.battery - c.batteryDrain

    if batteryRemaining < 0 {
        return
    }

    c.distance += c.speed
    c.battery = batteryRemaining
}

// DisplayDistance displays the driven distance
func (c *Car) DisplayDistance() string {
    return fmt.Sprintf("Driven %d meters", c.distance)
}

// DisplayBattery return the battery precentage as displayed on the LED display
func (c *Car) DisplayBattery() string {
    return fmt.Sprintf("Battery at %d%%", c.battery)
}

// CanFinish check if the car can finish the race
func (c *Car) CanFinish(trackDistance int) bool {
    return c.battery / c.batteryDrain * c.speed >= trackDistance
}
