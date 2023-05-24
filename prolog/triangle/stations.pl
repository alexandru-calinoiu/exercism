/*This part is inherited from: swish-1-0-1-code*/
connected(bond_street,oxford_circus,central).
connected(oxford_circus,tottenham_court_road,central).
connected(bond_street,green_park,jubilee).
connected(green_park,charing_cross,jubilee).
connected(green_park,piccadilly_circus,piccadilly).
connected(piccadilly_circus,leicester_square,piccadilly).
connected(green_park,oxford_circus,victoria).
connected(oxford_circus,piccadilly_circus,bakerloo).
connected(piccadilly_circus,charing_cross,bakerloo).
connected(tottenham_court_road,leicester_square,northern).
connected(leicester_square,charing_cross,northern).
/*This is the end of inheritance.*/

nearby(X,Y):-connected(X,Y,_L).
nearby(X,Y):-connected(X,Z,L),connected(Z,Y,L).

not_too_far(X,Y):-connected(X,Z,L),connected(Z,Y,L).  % replace 'true' with your definition
not_too_far(X,Y):-connected(X,Z,_L1),connected(Z,Y,_L2).  % add more clauses as needed

reachable(X,Y,[]):-connected(X,Y,_L).
reachable(X,Y,[Z|R]):-connected(X,Z,_L),reachable(Z,Y,R).

woman:-human,not(man).
man:-human,not(woman).