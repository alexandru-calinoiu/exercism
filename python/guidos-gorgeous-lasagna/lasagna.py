"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""


EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


# You might also consider using 'PREPARATION_TIME' here, if you have it defined.
def preparation_time_in_minutes(nunmber_of_layers):
    """Calculate the total preparation time.

    :param number_of_layers: int - number of layers.
    :return: int - the total preparation time.

    This function takes the number of layers and calculates the preparation time (in minutes)
    based on 'PREPARATION_TIME'
    """
    return PREPARATION_TIME * nunmber_of_layers


# Remember to add a docstring (you can copy and then alter the one from bake_time_remaining.)
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the total elapsed cooking time.

    :param number_of_layers: int - number of layers.
    :param elapsed_bake_time: int - time the lasagna was cooking.
    :return: int - the time that has passed.

    This function should return the total number of minutes you've been cooking, 
    or the sum of your preparation time and 
    the time the lasagna has already spent baking in the oven.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
