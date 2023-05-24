%! create(+DimTuple)
%
% The create/1 predicate succeeds if the DimTuple contains valid chessboard 
% dimensions, e.g. (0,0) or (2,4).
create((DimX, DimY)) :-
	(DimX < 8), (DimY < 8), (DimX >= 0), (DimY >= 0).

%! attack(+FromTuple, +ToTuple)
%
% The attack/2 predicate succeeds if a queen positioned on ToTuple is 
% vulnerable to an attack by another queen positioned on FromTuple.

% they are on the same row or column
attack((X, _), (X, _)) :- !.
attack((_, Y), (_, Y)) :- !.
% they are on te same diagonal
attack((FromX, FromY), (ToX, ToY)):-
	(abs(FromX - ToX, AbsX), abs(FromY - ToY, AbsY), AbsX == AbsY).
