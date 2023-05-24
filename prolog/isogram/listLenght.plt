listLenght([], 0).
listLenght([_X|Y], s(L)):-listLenght(Y, L).