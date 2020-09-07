export const AllSuits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
export type AllSuitsType = typeof AllSuits;

export type Suit = AllSuitsType[number];

export const AllRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
export type AllRanksTypes = typeof AllRanks;
export type Rank = AllRanksTypes[number];

export interface Card {
  rank: Rank;
  suit: Suit;
}
