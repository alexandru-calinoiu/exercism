package parsinglogfiles

import (
    "fmt"
    "regexp"
)

func IsValidLine(text string) bool {
	re, _ := regexp.Compile(`\A(\[TRC]|\[DBG]|\[INF]|\[WRN]|\[ERR]|\[FTL])`)
	return re.MatchString(text)
}

func SplitLogLine(text string) []string {
	re, _ := regexp.Compile(`<[*~=-]*?>`)
	return re.Split(text, -1)
}

func CountQuotedPasswords(lines []string) int {
	re, _ := regexp.Compile(`(?i)".*?password.*?"`)
	count := 0
	for _, line := range lines {
		if re.MatchString(line) {
			count += 1
		}
	}
	return count
}

func RemoveEndOfLineText(text string) string {
	re, _ := regexp.Compile(`end-of-line\d*`)

    return re.ReplaceAllString(text, "")
}

func TagWithUserName(lines []string) []string {
	re, _ := regexp.Compile(`User\s+?(\w+)`)
    result := make([]string, len(lines))

    for index, line := range lines {
        matches := re.FindAllStringSubmatch(line, -1)
        if len(matches) !=  0 {
            result[index] = fmt.Sprintf("[USR] %s %s", matches[0][len(matches[0]) - 1], line)
        } else {
            result[index] = line
        }
    }

    return result
}
