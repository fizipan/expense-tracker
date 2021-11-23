/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useState } from 'react';
import { GlobalContext } from 'context/GlobalState';
import PropTypes from 'prop-types';

import FormatNumber from 'utils/FormatNumber';

import {
  TrendingUpIcon,
  TrendingDownIcon,
  XIcon,
} from '@heroicons/react/outline';

export default function BudgetItem(props) {
  const { id, title, action, amount, date } = props;

  const { deleteTransaction } = useContext(GlobalContext);

  const [changeDelete, setChangeDelete] = useState(false);

  const getDate = new Date(date).toDateString();

  return (
    <div className="flex items-center space-x-5">
      {changeDelete ? (
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => deleteTransaction(id)}
        >
          <div className="bg-white border rounded-full w-12 h-12 flex justify-center items-center p-3">
            <XIcon className="w-8 h-8 text-black" />
          </div>
        </div>
      ) : (
        <div className="flex-shrink-0">
          {action === 'income' ? (
            <div className="bg-green-500 border rounded-full w-12 h-12 flex justify-center items-center p-3">
              <TrendingUpIcon className="w-8 h-8 text-white" />
            </div>
          ) : (
            <div className="bg-red-500 border rounded-full w-12 h-12 flex justify-center items-center p-3">
              <TrendingDownIcon className="w-8 h-8 text-white" />
            </div>
          )}
        </div>
      )}
      <div
        className="flex-1 space-y-1 cursor-pointer"
        onClick={() => setChangeDelete(!changeDelete)}
      >
        <h6 className="text-lg font-medium leading-7 tracking-wider">
          {title}
        </h6>
        <p className="text-gray-500 text-xs font-medium leading-4 tracking-wide">
          {getDate}
        </p>
      </div>
      <div
        className={`${
          action === 'income' ? 'text-green-500' : 'text-red-500'
        } text-lg font-medium leading-7 tracking-wide`}
      >
        {action === 'income' ? '+' : '-'}
        <span className="pl-2">{FormatNumber(amount)}</span>
      </div>
    </div>
  );
}

BudgetItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.oneOf(['income', 'expenditure']).isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
};
