import React from 'react';
import { connect } from 'react-redux';
import expenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

//Andrews Version
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
        </div>
    )

}
// my version
// export const ExpensesSummary = props => {
//     const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
//     const formattedExpenseTotal = numeral(expenseTotal(props.expenses) / 100).format('$0,0.00')
//     return (
//         <div>
//             <h2>Viewing {props.expenses.length} {expenseWord} totaling {formattedExpenseTotal}</h2>
//         </div>
//     )
// };

const mapStateToProps = state => {
    //Andrews Version
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expenseTotal(visibleExpenses)
    }
    // this was my version below:
    // return {
    //     expenses: selectExpenses(state.expenses, state.filters)
    // };
};

export default connect(mapStateToProps)(ExpensesSummary)