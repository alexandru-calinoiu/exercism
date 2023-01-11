package techpalace

import "strings"
import "fmt"

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	return fmt.Sprintf("Welcome to the Tech Palace, %s", strings.ToUpper(customer))
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	builder := new(strings.Builder)

	builder.WriteString(strings.Repeat("*", numStarsPerLine))
	builder.WriteString("\n")
	builder.WriteString(welcomeMsg)
	builder.WriteString("\n")
	builder.WriteString(strings.Repeat("*", numStarsPerLine))

	return builder.String()
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	newMsg := strings.ReplaceAll(oldMsg, "*", "")
	return strings.TrimSpace(newMsg)
}
