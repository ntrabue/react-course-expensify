import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Remove expense should remove an expense', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Edit expense should correctly change an expense', () => {
  const action = editExpense('123abc', { note: 'New Note Value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New Note Value'
    }
  });
});

test('Should setup a new expense with provided values', () => {
  const expenseData = { description: 'Test', amount: 109500, createdAt: 1000, note: 'This was last months rent' };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup an expense with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
