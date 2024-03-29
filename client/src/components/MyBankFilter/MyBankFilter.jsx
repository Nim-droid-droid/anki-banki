import React, { useState } from 'react';
import Button from '../Button';

const MyBankFilter = () => {
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  return (
    <div className="my-bank">
      <div className="mybank-line" />
      <h2 className="mybank-title">myBank</h2>
      <div className="filter-container mr-14 font-semibold">
        <button className="btn ">filter by :</button>
        <div className="relative">
          <button
            className="btn w-[200px] bg-white text-gray-400 font-bold"
            onClick={() => setTypeDropdown((prev) => !prev)}
          >
            type
          </button>

          {typeDropdown && (
            <div className="dropdown w-[200px]">
              <p>
                <input type="checkbox" className="mr-2" />
                Behaviourial
              </p>

              <div>
                <input type="checkbox" className="mr-2" />
                Technical
                <div className="ml-4">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    HTML
                  </p>
                  <p>
                    <input type="checkbox" className="mr-2" />
                    CSS
                  </p>
                  <p>
                    <input type="checkbox" className="mr-2" />
                    JavaScript
                  </p>
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Node
                  </p>
                  <p>
                    <input type="checkbox" className="mr-2" />
                    CS Theory
                  </p>
                </div>
                <Button styles={'px-16 '} />
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="btn w-[230px] text-gray-400 bg-white font-bold"
            onClick={() => setStatusDropdown((prev) => !prev)}
          >
            status
          </button>
          {statusDropdown && (
            <div className="dropdown w-[230px]">
              <p>
                <input type="checkbox" className="mr-2" />
                unanswered
              </p>

              <div>
                <input type="checkbox" className="mr-2" />
                answered
                <div className="ml-4">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Good
                  </p>
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Great
                  </p>
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Awesome
                  </p>
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Not so good!
                  </p>
                </div>
                <Button styles={'px-20 '} />
              </div>
            </div>
          )}
        </div>
        <button className="btn bg-white">+</button>
      </div>
    </div>
  );
};

export default MyBankFilter;
