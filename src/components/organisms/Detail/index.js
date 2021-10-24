import BudgetSetting from 'components/molecules/BudgetSetting';
import StatisticsBalance from 'components/molecules/StatisticBalance';

export default function Detail() {
  return (
    <main className="max-w-app w-full bg-white rounded-t-3xl -mt-4 pt-8 px-10 relative z-40">
      {/* Statistics Balance */}
      <StatisticsBalance />

      {/* Budget setting */}
      <BudgetSetting />
    </main>
  );
}
