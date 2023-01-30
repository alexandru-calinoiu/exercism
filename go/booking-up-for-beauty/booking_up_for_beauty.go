package booking

import "time"
import "fmt"

// Schedule returns a time.Time from a string containing a date.
func Schedule(date string) time.Time {
    t, _ := time.Parse("1/02/2006 15:04:05", date)
	return t
}

// HasPassed returns whether a date has passed.
func HasPassed(date string) bool {
    parsed, _ := time.Parse("January 1, 2006 15:04:05", date)
    return time.Now().After(parsed)
}

// IsAfternoonAppointment returns whether a time is in the afternoon.
func IsAfternoonAppointment(date string) bool {
    parsed, _ := time.Parse("Monday, January 1, 2006 15:04:05", date)
	return parsed.Hour() >= 12 && parsed.Hour() < 18
}

// Description returns a formatted string of the appointment time.
func Description(date string) string {
    parsed, _ := time.Parse("1/2/2006 15:04:05", date)
    return fmt.Sprintf("You have an appointment on %s, at %s.", parsed.Format("Monday, January 2, 2006"), parsed.Format("15:04"))
}

// AnniversaryDate returns a Time with this year's anniversary.
func AnniversaryDate() time.Time {
    return time.Date(time.Now().Year(), 9, 15, 0, 0, 0, 0, time.UTC)
}
