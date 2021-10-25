import BudgetItem from './BudgetItem';

export default function BudgetSetting() {
  return (
    <div className="mt-8">
      <h5 className="text-2xl leading-9 tracking-wide">Budget setting</h5>

      {/* Budget Item */}
      <div className="space-y-5 rounded-md mt-4 overflow-y-auto scrollbar-hide max-h-[27.2rem] lg:max-h-[24.6rem]">
        <BudgetItem
          name="Wages"
          action="income"
          value={3000000}
          date="Oct 21, 2021"
        />
        <BudgetItem
          name="Health"
          action="expenditure"
          value={50000}
          date="Oct 22, 2021"
        />
        <BudgetItem
          name="Shopping"
          action="expenditure"
          value={150000}
          date="Oct 23, 2021"
        />
        <BudgetItem
          name="Dividend"
          action="income"
          value={200000}
          date="Oct 24, 2021"
        />
      </div>
    </div>
  );
}
