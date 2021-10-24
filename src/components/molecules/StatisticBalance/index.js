import StatisticsCard from './StatisticsCard';

export default function StatisticsBalance() {
  return (
    <div>
      <h5 className="text-2xl leading-9 tracking-wide">Finance Balance</h5>

      {/* Statistics Card */}
      <div className="grid grid-cols-2 gap-x-3 mt-4">
        <StatisticsCard title="income" value="3000000" />
        <StatisticsCard title="expenditure" value="200000" />
      </div>
    </div>
  );
}
