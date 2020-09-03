import React from 'react';
import { Card } from './types';
import styled from 'styled-components';
import * as Cards from './Cards';
export interface CardProps {
  card: Card;
}

export default function CardComponent({ card }: CardProps) {
  const { rank, suit } = card;
  const SuitCards = Cards[suit];
  const C = SuitCards[rank];

  return <C />;
}
