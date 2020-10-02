function createData(dateTime, paymentMethod, particulars, type, amount) {
  return { dateTime, paymentMethod, particulars, type, amount };
}

const data = [
  {
    id: 'Spent',
    label: 'Spent',
    value: 390,
    color: 'hsl(318, 70%, 50%)',
  },
  {
    id: 'Remaining',
    label: 'Remaining',
    value: 180,
    color: 'hsl(94, 70%, 50%)',
  },
];

const dailyBalanceData = [
  {
    dateTime: 'AD',
    expenses: 97,
    expensesColor: 'hsl(109, 70%, 50%)',
    revenues: 12,
    revenuesColor: 'hsl(26, 70%, 50%)',
  },
  {
    dateTime: 'AE',
    expenses: 81,
    revenues: 36,
  },
  {
    dateTime: 'AF',
    expenses: 147,
    revenues: 127,
  },
  {
    dateTime: 'AG',
    expenses: 61,
    revenues: 14,
  },
  {
    dateTime: 'AI',
    expenses: 1000,
    revenues: 93,
  },
  {
    dateTime: 'AL',
    expenses: 138,
    revenues: 132,
  },
  {
    dateTime: 'AM',
    expenses: 166,
    revenues: 5,
  },
];

const transactionData = [
  createData(
    new Date().toLocaleString(),
    'Paypal',
    'Via Paypal to Kamesh for monthly work 8 hours.',
    'Credit',
    '₹114.0',
  ),
  createData(new Date().toLocaleString(), 'Credit Card', '', 'Debit', '₹4300'),
  createData(
    new Date().toLocaleString(),
    'Debit Card',
    'Groceries',
    'Credit',
    '₹60000',
  ),
  createData(
    new Date().toLocaleString(),
    'Net Banking',
    'Test Data',
    'Debit',
    '₹111',
  ),
];

module.exports = {
  data,
  dailyBalanceData,
  transactionData,
};
