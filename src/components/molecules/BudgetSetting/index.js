import { GlobalContext } from 'context/GlobalState';
import { useContext } from 'react';
import BudgetItem from './BudgetItem';

export default function BudgetSetting() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mt-8">
      <h5 className="text-2xl leading-9 tracking-wide">Budget setting</h5>

      {/* Budget Item */}
      <div className="space-y-5 rounded-md mt-4 overflow-y-auto scrollbar-hide max-h-[27.2rem] lg:max-h-[24.6rem]">
        {transactions.map((transaction) => (
          <BudgetItem
            key={transaction.id}
            id={transaction.id}
            title={transaction.title}
            action={transaction.action}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </div>
    </div>
  );
}
