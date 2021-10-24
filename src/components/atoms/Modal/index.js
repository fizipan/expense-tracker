import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-full max-w-app">
        <div className="float-right">
          <div className="fixed bottom-11 right-[50%] transform translate-x-1/2 z-50">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className=" gradient-button rounded-full w-14 h-14 flex justify-center items-center"
            >
              <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5996 22.6512L13.996 22.7984C13.6188 22.8053 13.2597 22.9617 12.9979 23.2333C12.736 23.5049 12.5928 23.8694 12.5997 24.2466C12.6066 24.6238 12.763 24.9828 13.0346 25.2446C13.3062 25.5065 13.6707 25.6497 14.0479 25.6428L22.6512 25.4757L22.7983 34.0793C22.8052 34.4565 22.9617 34.8155 23.2333 35.0774C23.5048 35.3392 23.8693 35.4825 24.2465 35.4756C24.6237 35.4687 24.9827 35.3122 25.2446 35.0406C25.5064 34.769 25.6497 34.4046 25.6428 34.0274L25.4756 25.4241L34.0793 25.2769C34.2663 25.2743 34.4509 25.2346 34.6225 25.1603C34.7941 25.0859 34.9493 24.9783 35.0791 24.8437C35.2089 24.7091 35.3107 24.55 35.3788 24.3759C35.4468 24.2017 35.4797 24.0157 35.4755 23.8287C35.4729 23.6417 35.4332 23.4571 35.3588 23.2855C35.2845 23.1139 35.1769 22.9587 35.0423 22.8289C34.9076 22.6991 34.7486 22.5973 34.5744 22.5292C34.4002 22.4612 34.2143 22.4283 34.0273 22.4325L25.424 22.5997L25.2769 13.996C25.2742 13.809 25.2346 13.6244 25.1602 13.4528C25.0859 13.2812 24.9783 13.126 24.8436 12.9962C24.709 12.8664 24.55 12.7645 24.3758 12.6965C24.2016 12.6285 24.0156 12.5956 23.8287 12.5998C23.6417 12.6024 23.4571 12.6421 23.2855 12.7164C23.1139 12.7908 22.9587 12.8984 22.8289 13.033C22.6991 13.1676 22.5972 13.3267 22.5292 13.5008C22.4611 13.675 22.4282 13.861 22.4324 14.048L22.5996 22.6512Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[100] overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add new transaction
                </Dialog.Title>
                <div className="mt-4 space-y-4">
                  <label htmlFor="title" className="block">
                    <span className="text-gray-500 text-sm">Title</span>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="title"
                      id="title"
                      placeholder="Enter title..."
                      required
                      autoComplete="off"
                    />
                  </label>
                  <label htmlFor="action" className="block">
                    <span className="text-gray-500 text-sm">Action</span>
                    <select
                      name="action"
                      id="action"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      <option value="income">Income (+)</option>
                      <option value="expenditure">Expenditure (-)</option>
                    </select>
                  </label>
                  <label htmlFor="amount" className="block">
                    <span className="text-gray-500 text-sm">Amount</span>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="amount"
                      id="amount"
                      placeholder="Enter amount..."
                      required
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div className="mt-7 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Add Transaction
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
