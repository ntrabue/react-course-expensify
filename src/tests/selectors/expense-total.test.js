import getExpensesTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 with no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should correctly add up a multiple expense', () => {
    const result = getExpensesTotal([expenses[0], expenses[1], expenses[2]]);
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});