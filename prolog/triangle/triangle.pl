triangle(A, A, A, "equilateral") :- triangle_inequality(A, A, A), !.
triangle(A, B, B, "isosceles") :- triangle_inequality(A, B, B), !.
triangle(A, A, B, "isosceles") :- triangle_inequality(A, A, B), !.
triangle(A, B, A, "isosceles") :- triangle_inequality(A, B, A), !.
triangle(A, B, C, "scalene") :- 
  triangle_inequality(A, B, C),
  A \= B,
  B \= C,
  B \= C.

triangle_inequality(A, B, C) :- 
  A + B >= C,
  A + C >= B,
  B + C >= A,
  A > 0,
  B > 0,
  C > 0.