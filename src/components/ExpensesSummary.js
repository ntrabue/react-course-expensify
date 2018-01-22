import React from 'react';
import { connect } from 'react-redux';
import expenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = props => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal(props.expenses) / 100).format('$0,0.00')
    return (
        <div>
            <h2>Viewing {props.expenses.length} {expenseWord} totaling {formattedExpenseTotal}</h2>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary)