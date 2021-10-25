/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/outline';

export default function BudgetItem(props) {
  const { name, action, value, date } = props;
  return (
    <div className="flex items-center space-x-5">
      <div className="flex-shrink-0">
        {action === 'income' ? (
          <div className="bg-green-500 rounded-full w-12 h-12 flex justify-center items-center p-3">
            <TrendingUpIcon className="w-8 h-8 text-white" />
          </div>
        ) : (
          <div className="bg-red-500 rounded-full w-12 h-12 flex justify-center items-center p-3">
            <TrendingDownIcon className="w-8 h-8 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1 space-y-1">
        <h6 className="text-lg font-medium leading-7 tracking-wider">{name}</h6>
        <p className="text-gray-500 text-xs font-medium leading-4 tracking-wide">
          {date}
        </p>
      </div>
      <div
        className={`${
          action === 'income' ? 'text-green-500' : 'text-red-500'
        } text-lg font-medium leading-7 tracking-wide`}
      >
        {action === 'income' ? '+' : '-'}
        <span className="pl-2">{new Intl.NumberFormat().format(value)}</span>
      </div>
    </div>
  );
}

BudgetItem.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.oneOf(['income', 'expenditure']).isRequired,
  value: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};
