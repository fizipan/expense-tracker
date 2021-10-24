/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

export default function BudgetItem(props) {
  const { name, value, date } = props;
  return (
    <div className="flex items-center space-x-5">
      <div className="flex-shrink-0">
        <div className="bg-green-500 rounded-full w-12 h-12 flex justify-center items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3333 9.33333H24V8C24 6.93913 23.5786 5.92172 22.8284 5.17157C22.0783 4.42143 21.0609 4 20 4H6.66666C5.60579 4 4.58838 4.42143 3.83823 5.17157C3.08808 5.92172 2.66666 6.93913 2.66666 8V8V24C2.66666 25.0609 3.08808 26.0783 3.83823 26.8284C4.58838 27.5786 5.60579 28 6.66666 28H25.3333C26.3942 28 27.4116 27.5786 28.1618 26.8284C28.9119 26.0783 29.3333 25.0609 29.3333 24V13.3333C29.3333 12.2725 28.9119 11.2551 28.1618 10.5049C27.4116 9.75476 26.3942 9.33333 25.3333 9.33333ZM6.66666 6.66667H20C20.3536 6.66667 20.6928 6.80714 20.9428 7.05719C21.1928 7.30724 21.3333 7.64638 21.3333 8V9.33333H6.66666C6.31303 9.33333 5.9739 9.19286 5.72385 8.94281C5.4738 8.69276 5.33332 8.35362 5.33332 8C5.33332 7.64638 5.4738 7.30724 5.72385 7.05719C5.9739 6.80714 6.31303 6.66667 6.66666 6.66667V6.66667ZM26.6667 20H25.3333C24.9797 20 24.6406 19.8595 24.3905 19.6095C24.1405 19.3594 24 19.0203 24 18.6667C24 18.313 24.1405 17.9739 24.3905 17.7239C24.6406 17.4738 24.9797 17.3333 25.3333 17.3333H26.6667V20ZM26.6667 14.6667H25.3333C24.2725 14.6667 23.255 15.0881 22.5049 15.8382C21.7548 16.5884 21.3333 17.6058 21.3333 18.6667C21.3333 19.7275 21.7548 20.7449 22.5049 21.4951C23.255 22.2452 24.2725 22.6667 25.3333 22.6667H26.6667V24C26.6667 24.3536 26.5262 24.6928 26.2761 24.9428C26.0261 25.1929 25.6869 25.3333 25.3333 25.3333H6.66666C6.31303 25.3333 5.9739 25.1929 5.72385 24.9428C5.4738 24.6928 5.33332 24.3536 5.33332 24V11.7733C5.76168 11.924 6.21257 12.0007 6.66666 12H25.3333C25.6869 12 26.0261 12.1405 26.2761 12.3905C26.5262 12.6406 26.6667 12.9797 26.6667 13.3333V14.6667Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="flex-1 space-y-1">
        <h6 className="text-lg font-medium leading-7 tracking-wider">{name}</h6>
        <p className="text-gray-500 text-xs font-medium leading-4 tracking-wide">
          {date}
        </p>
      </div>
      <div className="text-lg font-medium leading-7 tracking-wide">{value}</div>
    </div>
  );
}

BudgetItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
