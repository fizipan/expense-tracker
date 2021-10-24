import BudgetItem from './BudgetItem';

export default function BudgetSetting() {
  return (
    <div className="mt-8">
      <h5 className="text-2xl leading-9 tracking-wide">Budget setting</h5>

      {/* Budget Item */}
      <div className="space-y-5 rounded-md mt-4 overflow-y-auto scrollbar-hide max-h-[27.2rem] lg:max-h-[24.6rem]">
        <BudgetItem name="Wages" value="+ 3.000.000" date="Oct 22, 2021" />
        <BudgetItem name="Health" value="- 50.000" date="Oct 22, 2021" />
        <BudgetItem name="Shopping" value="- 150.000" date="Oct 22, 2021" />
        <BudgetItem name="Dividend" value="+ 200.000" date="Oct 22, 2021" />
        <BudgetItem name="Wages" value="+ 3.000.000" date="Oct 22, 2021" />
        <BudgetItem name="Health" value="- 50.000" date="Oct 22, 2021" />
        <BudgetItem name="Shopping" value="- 150.000" date="Oct 22, 2021" />
        <BudgetItem name="Dividend" value="+ 200.000" date="Oct 22, 2021" />
      </div>
    </div>
  );
}
