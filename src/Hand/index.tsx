import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CardView from '../Card';
import { Card } from '../types';

export default function HandComponent({ cards }: { cards: Card[] }) {
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});
  const toggleSelected = useCallback(
    (index: number) =>
      setSelected({
        ...selected,
        [index]: !selected[index],
      }),
    [selected, setSelected],
  );

  const renderCards = useCallback(
    (cards) =>
      cards.map((card, index) => {
        console.log(`selected: ${JSON.stringify(selected)}`);
        return (
          <CardView
            card={card}
            key={index}
            isLastCard={index === cards.length - 1}
            isSelected={selected[index]}
            onClick={() => toggleSelected(index)}
          />
        );
      }),
    [selected],
  );

  return <Container>{renderCards(cards)}</Container>;
}

const Container = styled.div`
  display: flex;
`;
