/*
 * Transaction Widget Messages
 *
 * This contains all the text for the Transaction Widget component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.TransactionWidget';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Last 5 Transactions',
  },
  dateTime: {
    id: `${scope}.tableHeader.dateTime`,
    defaultMessage: 'Date and Time',
  },
  paymentMethod: {
    id: `${scope}.tableHeader.paymentMethod`,
    defaultMessage: 'Payment Method',
  },
  particulars: {
    id: `${scope}.tableHeader.particulars`,
    defaultMessage: 'Particulars',
  },
  type: {
    id: `${scope}.tableHeader.type`,
    defaultMessage: 'Type',
  },
  amount: {
    id: `${scope}.tableHeader.amount`,
    defaultMessage: 'Amount',
  },
});
