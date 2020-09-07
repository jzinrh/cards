import React from 'react';
import { Card, Suit } from '../types';
import styled from 'styled-components';
import { Html5Entities } from 'html-entities';

const iconMap: { [key: string]: string } = {
  Hearts: '&hearts;',
  Spades: '&spades;',
  Clubs: '♣',
  Diamonds: '&diams;',
};

const getSuitValue = (suit: Suit) => iconMap[suit];

const htmlEntities = new Html5Entities();
interface CardInterface {
  card: Card;
  isLastCard: boolean;
  isSelected: boolean;
  onClick: () => void;
}

export default function CardComponent({ card, isLastCard, isSelected, onClick }: CardInterface) {
  const { suit, rank } = card;
  const suitValue = htmlEntities.decode(getSuitValue(suit));

  const isFullSize = isSelected || isLastCard;
  return (
    <Container width={isFullSize ? 200 : 60} onClick={() => onClick()}>
      <LeftColumn>
        <CardValue suit={suit}>{rank}</CardValue>
        <CardValue suit={suit}>{suitValue}</CardValue>
      </LeftColumn>
      {isFullSize && (
        <CenterColumn>
          <CardValue suit={suit}>{rank}</CardValue>
          <CardValue suit={suit}>{suitValue}</CardValue>
        </CenterColumn>
      )}
      {isFullSize && (
        <RightColumn>
          <CardValue suit={suit}>{rank}</CardValue>
          <CardValue suit={suit}>{suitValue}</CardValue>
        </RightColumn>
      )}
    </Container>
  );
}

const Container = styled.span<{
  width: number;
}>`
  display: flex;
  ${({ width }) => `
      width: ${width}px;
      `}
  height: 300px;
  border: 1px solid black;
  font-size: 20px;

  border-radius: 5px;

  &:hover {
    background-color: gray;
  }
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;

  flex: 3;

  justify-content: center;
  align-items: center;

  font-size: 32px;
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;

  flex: 1;
  align-items: center;
`;

const LeftColumn = styled(SideColumn)``;

const RightColumn = styled(SideColumn)`
  transform: rotate(180deg);
`;

const CardValue = styled.span<{
  suit: Card['suit'];
}>`
  color: ${(props) => (props.suit === 'Hearts' || props.suit === 'Diamonds' ? 'red' : 'black')};
`;
