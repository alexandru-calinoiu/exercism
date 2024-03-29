package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten", "jack", "queen", "king":
		return 10
	default:
		return 0

	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	parsedCard1 := ParseCard(card1)
	parsedCard2 := ParseCard(card2)
	parsedDealerCard := ParseCard(dealerCard)
	sum := parsedCard1 + parsedCard2

	switch {
	case parsedCard1 == 11 && parsedCard2 == 11:
		return "P"
	case sum == 21 && (parsedDealerCard != 10 && parsedDealerCard != 11):
		return "W"
	case 17 <= sum && sum <= 20:
		return "S"
	case 12 <= sum && sum <= 16:
		if parsedDealerCard < 7 {
			return "S"
		} else {
			return "H"
		}
	case sum <= 11:
		return "H"
	default:
		return "S"
	}
}
