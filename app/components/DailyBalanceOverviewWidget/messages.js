/*
 * Daily Balance Overview Widget Messages
 *
 * This contains all the text for the Daily Balance Overview Widget component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.DailyBalanceOverview';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Daily Balance Overview',
  },
  timeline: {
    id: `${scope}.timeline`,
    defaultMessage: 'Duration',
  },
});
