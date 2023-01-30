package expenses

import "fmt"

// Record represents an expense record.
type Record struct {
	Day      int
	Amount   float64
	Category string
}

// DaysPeriod represents a period of days for expenses.
type DaysPeriod struct {
	From int
	To   int
}

type RecordPredicate func(Record) bool
    
// Filter returns the records for which the predicate function returns true.
func Filter(in []Record, predicate RecordPredicate) []Record {
    var result []Record
	for _, v := range in {
		if predicate(v) {
			result = append(result, v)
		}
	}

	return result
}

// ByDaysPeriod returns predicate function that returns true when
// the day of the record is inside the period of day and false otherwise.
func ByDaysPeriod(p DaysPeriod) RecordPredicate {
	return func(r Record) bool {
		return p.From <= r.Day && r.Day <= p.To
	}
}

// ByCategory returns predicate function that returns true when
// the category of the record is the same as the provided category
// and false otherwise.
func ByCategory(c string) RecordPredicate {
	return func(r Record) bool {
		return r.Category == c
	}
}

// TotalByPeriod returns total amount of expenses for records
// inside the period p.
func TotalByPeriod(in []Record, p DaysPeriod) float64 {
	return total(in, []RecordPredicate{ByDaysPeriod(p)})
}

type unknowCategoryError struct {
	category string
}

func newUnknowCategoryError(c string) *unknowCategoryError {
	return &unknowCategoryError{category: c}
}

func (e *unknowCategoryError) Error() string {
	return fmt.Sprintf("unknown category %s", e.category)
}

// CategoryExpenses returns total amount of expenses for records
// in category c that are also inside the period p.
// An error must be returned only if there are no records in the list that belong
// to the given category, regardless of period of time.
func CategoryExpenses(in []Record, p DaysPeriod, c string) (float64, error) {
	if len(Filter(in, ByCategory(c))) == 0 {
		return 0, newUnknowCategoryError(c)
	}

	return total(in, []RecordPredicate{ByDaysPeriod(p), ByCategory(c)}), nil
}

func total(in []Record, predicates []RecordPredicate) float64 {
	var total float64
	for _, v := range in {
		if and(v, predicates) {
			total += v.Amount
		}
	}

	return total
}

func and(r Record, predicates []RecordPredicate) bool {
	result := true
	for _, predicate := range predicates {
		result = result && predicate(r)
		if !result {
			return false
		}
	}

	return result
}
