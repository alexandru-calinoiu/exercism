isogram(Word):-
  downcase_atom(Word, DowncaseWord),
  atom_chars(DowncaseWord, Chars),
  is_isogram(Chars).

is_isogram([]).
is_isogram([H|T]):-
  ((H = ' '; H = '-');(H \= ' ', H \= '-', not(member(H, T)))),
  is_isogram(T).
