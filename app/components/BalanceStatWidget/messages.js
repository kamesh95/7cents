/*
 * Balance Widget Messages
 *
 * This contains all the text for the Balance Widget component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.BalanceWidget';

export default defineMessages({
  balanceStat: {
    id: `${scope}.balanceStat`,
    defaultMessage: 'Balance Stats',
  },
  spent: {
    id: `${scope}.spent`,
    defaultMessage: 'Spent',
  },
});
