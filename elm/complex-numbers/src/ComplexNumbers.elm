module ComplexNumbers exposing
    ( Complex
    , abs
    , add
    , conjugate
    , div
    , exp
    , fromPair
    , fromReal
    , imaginary
    , mul
    , real
    , sub
    )


type Real
    = Real Float


type Imaginary
    = Imaginary Float


type Complex
    = Complex Real Imaginary


fromPair : ( Float, Float ) -> Complex
fromPair ( r, i ) =
    Complex (Real r) (Imaginary i)


fromReal : Float -> Complex
fromReal number =
    Complex (Real number) (Imaginary 0)


real : Complex -> Float
real (Complex (Real r) _) =
    r


imaginary : Complex -> Float
imaginary (Complex _ (Imaginary i)) =
    i


conjugate : Complex -> Complex
conjugate (Complex (Real a) (Imaginary b)) =
    fromPair ( a, negate b )


abs : Complex -> Float
abs (Complex (Real a) (Imaginary b)) =
    sqrt (a ^ 2 + b ^ 2)


add : Complex -> Complex -> Complex
add (Complex (Real a) (Imaginary b)) (Complex (Real c) (Imaginary d)) =
    fromPair ( a + c, b + d )


sub : Complex -> Complex -> Complex
sub (Complex (Real a) (Imaginary b)) (Complex (Real c) (Imaginary d)) =
    fromPair ( a - c, b - d )


mul : Complex -> Complex -> Complex
mul (Complex (Real a) (Imaginary b)) (Complex (Real c) (Imaginary d)) =
    fromPair ( a * c - b * d, b * c + a * d )


div : Complex -> Complex -> Complex
div (Complex (Real a) (Imaginary b)) (Complex (Real c) (Imaginary d)) =
    fromPair ( (a * c + b * d) / (c ^ 2 + d ^ 2), (b * c - a * d) / (c ^ 2 + d ^ 2) )


exp : Complex -> Complex
exp (Complex (Real a) (Imaginary b)) =
    mul (fromPair ( e ^ a, 0 )) (fromPair ( cos b, sin b ))
