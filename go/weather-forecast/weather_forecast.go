// Package weather provides utilities for forecasting the app in the cities in Goblinocus.
package weather

// CurrentCondition stores the value of the last condition send to Forecast.
var CurrentCondition string

// CurrentLocation stores the value of the last city send to Forecast.
var CurrentLocation string

// Forecast returns the current conditions in the given city, the name is misleading as it dose not actually do any forecasting.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
