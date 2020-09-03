import React from 'react';

import Card, { CardProps } from './';

export default {
  component: Card,
  title: 'Card',
};

const Template = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
// @ts-ignore next-line
Default.args = {
  card: {
    rank: 'ten',
    suit: 'Hearts',
  },
};
