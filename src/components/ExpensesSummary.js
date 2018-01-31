import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import expenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

//Andrews Version
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expenseTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary)