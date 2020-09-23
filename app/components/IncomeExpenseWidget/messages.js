/*
 * Income Expense Widget Messages
 *
 * This contains all the text for the Income Expense Widget component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.IncomeExpenseWidget';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Income / Expense',
  },
  expense: {
    id: `${scope}.expense`,
    defaultMessage: 'Total amount expense',
  },
  income: {
    id: `${scope}.income`,
    defaultMessage: 'Total amount income',
  },
});
