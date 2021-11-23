import { GlobalContext } from 'context/GlobalState';
import { useContext } from 'react';
import StatisticsCard from './StatisticsCard';

export default function StatisticsBalance() {
  const { transactions } = useContext(GlobalContext);

  const totalIncome = transactions
    .filter((transaction) => transaction.action === 'income')
    .reduce((acc, item) => (acc += item.amount), 0);

  const totalExpenditure = transactions
    .filter((transaction) => transaction.action === 'expenditure')
    .reduce((acc, item) => (acc += item.amount), 0);

  return (
    <div>
      <h5 className="text-2xl leading-9 tracking-wide">Finance Balance</h5>

      {/* Statistics Card */}
      <div className="grid grid-cols-2 gap-x-3 mt-4">
        <StatisticsCard title="income" amount={totalIncome} />
        <StatisticsCard title="expenditure" amount={totalExpenditure} />
      </div>
    </div>
  );
}
