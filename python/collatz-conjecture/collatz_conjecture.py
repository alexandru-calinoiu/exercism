"""Just a recursion to show the number of steps for collatz conjecture

Learn about this exercise here
https://exercism.org/tracks/python/exercises/currency-exchange
"""


def steps(number):
    """

    :param number: int - a positive integer to get us started.
    :return: int - the number of steps it takes to get us to one according to the conjecture.
    """
    if number < 1:
        raise ValueError("Only positive integers are allowed")
    if number == 1:
        return 0
    if is_even(number):
        return 1 + steps(number / 2)
    else:
        return 1 + steps(3 * number + 1)


def is_even(number):
    """

    :param number: int - a integer.
    :return: bool - return True if the number is even, False otherwise.
    """
    return number % 2 == 0
