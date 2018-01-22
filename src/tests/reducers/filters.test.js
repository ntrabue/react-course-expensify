import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

//should set text filter
test('should set text filter', () => {
  const testText = 'testing';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: testText });
  expect(state.text).toBe(testText);
});

test('should set start date', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate: startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set end date', () => {
  const endDate = moment();
  const foo = {
    type: 'SET_END_DATE',
    endDate: endDate
  };
  const state = filtersReducer(undefined, foo);
  expect(state.endDate).toEqual(endDate);
});
