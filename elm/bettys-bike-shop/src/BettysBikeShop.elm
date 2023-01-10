module BettysBikeShop exposing (penceToPounds, poundsToString)

import String exposing (cons, fromFloat)


penceToPounds : Int -> Float
penceToPounds pence =
    toFloat pence / 100


poundsToString : Float -> String
poundsToString pounds =
    cons '£' (fromFloat pounds)
