import React from 'react';

import { Card, AllSuits, AllRanks } from '../types';
import HandView from './';

export default {
  component: HandView,
  title: 'Hand',
};

const Template = ({ cards }: { cards: Card[] }) => <HandView cards={cards} />;

export const Default = Template.bind({});
// @ts-ignore next-line
Default.args = {
  cards: [
    { suit: 'Spades', rank: 10 },
    { suit: 'Hearts', rank: 10 },
    { suit: 'Diamonds', rank: 10 },
  ],
};
