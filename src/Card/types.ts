export type Suit = 'Hearts' | 'Spades' | 'Clubs' | 'Diamonds';

// export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';
export type Rank =
  | 'ace'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'six'
  | 'seven'
  | 'eight'
  | 'nine'
  | 'jack'
  | 'queen'
  | 'king';

export interface Card {
  rank: Rank;
  suit: Suit;
}
