module LuciansLusciousLasagna exposing (elapsedTimeInMinutes, expectedMinutesInOven, preparationTimeInMinutes)


expectedMinutesInOven : Int
expectedMinutesInOven =
    40


preparationTimeInMinutes : Int -> Int
preparationTimeInMinutes numberOfLayer =
    2 * numberOfLayer


elapsedTimeInMinutes : Int -> Int -> Int
elapsedTimeInMinutes numberOfLayers minutesInOven =
    preparationTimeInMinutes numberOfLayers + minutesInOven
