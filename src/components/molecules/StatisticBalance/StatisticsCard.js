/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import FormatNumber from 'utils/FormatNumber';

export default function StatisticsCard(props) {
  const { title, value } = props;
  return (
    <div className="bg-white text-center w-full statistics-card-shadow rounded-2xl p-5">
      <h6 className="text-sm font-medium leading-5 tracking-wide mb-2">
        {title}
      </h6>
      <p
        className={`${
          title === 'income' ? 'text-green-500' : 'text-red-500'
        } text-lg font-semibold leading-7 tracking-wide`}
      >
        Rp.
        <span className="pl-2">{FormatNumber(value)}</span>
      </p>
    </div>
  );
}

StatisticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
