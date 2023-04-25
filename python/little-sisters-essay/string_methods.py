"""Functions to help edit essay homework using string manipulation."""


def capitalize_title(title: str):
    """Convert the first letter of each word in the title to uppercase if needed.

    :param title: str - title string that needs title casing.
    :return: str - title string in title case (first letters capitalized).
    """

    return title.title()


def check_sentence_ending(sentence):
    """Check the ending of the sentence to verify that a period is present.

    :param sentence: str - a sentence to check.
    :return: bool - return True if punctuated correctly with period, False otherwise.
    """

    return sentence.endswith(".")


def clean_up_spacing(sentence: str):
    """Verify that there isn't any whitespace at the start and end of the sentence.

    :param sentence: str - a sentence to clean of leading and trailing space characters.
    :return: str - a sentence that has been cleaned of leading and trailing space characters.
    """

    return sentence.strip()


def replace_word_choice(sentence: str, old_word: str, new_word: str):
    """Replace a word in the provided sentence with a new one.

    :param sentence: str - a sentence to replace words in.
    :param old_word: str - word to replace.
    :param new_word: str - replacement word.
    :return: str - input sentence with new words in place of old words.
    """

    result = []
    for word in sentence.split():
        result.append(new_word if _is_same_word(word, old_word) else word)

    sentence = " ".join(result)
    return sentence if check_sentence_ending(sentence) else sentence + "."


def _is_same_word(word1: str, word2: str):
    if word1.endswith("."):
        word1 = word1[:-1]
    if word2.endswith("."):
        word2 = word2[:-1]

    return word1 == word2
