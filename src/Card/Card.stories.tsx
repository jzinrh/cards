import React from 'react';

import { Card, AllSuits, AllRanks } from '../types';
import CardView from './';

export default {
  component: CardView,
  title: 'Card',
  argTypes: {
    suit: {
      control: {
        type: 'select',
        options: AllSuits,
      },
    },
    rank: {
      control: {
        type: 'select',
        options: AllRanks,
      },
    },
  },
};

const Template = (card: Card) => <CardView card={card} onClick={() => {}} />;

export const Default = Template.bind({});
// @ts-ignore next-line
Default.args = {
  rank: 10,
  suit: 'Hearts',
};
