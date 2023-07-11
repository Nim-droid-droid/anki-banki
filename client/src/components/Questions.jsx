import React, { useState } from 'react';
import Button from './Button';

const Questions = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="mt-20">
      <div className="w-[80%] mx-auto mb-4">
        <div className="flex justify-between font-semibold relative ">
          <h3 className="text-3xl">Behavioural</h3>
          <a href="/mybank" className="text-blue-500">
            add new <Button styles={'px-1 ml-1'} />
          </a>
          <div className="line bg-primary " />
        </div>
        <div className="mt-4">
          <p className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            placeat corrupti laborum iure veniam, facere laboriosam perspiciatis
            ab consectetur molestias?
          </p>
          <div className="flex flex-col items-end">
            <p
              className=" cursor-pointer text-gray-500 font-semibold w-16"
              onClick={() => setShowAnswer((prev) => !prev)}
            >
              answer
            </p>
            {showAnswer && (
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                nobis perferendis, earum numquam beatae eius tenetur eos ut
                explicabo optio! Obcaecati, vel sapiente. Optio tempore ducimus,
                culpa pariatur placeat expedita.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto ">
        <div className="flex justify-between font-semibold relative items-center  ">
          <h3 className="text-3xl">Technical</h3>
          <a href="/mybank" className="text-blue-500">
            add new <Button styles={'px-1 ml-1'} />
          </a>
          <div className="line bg-primary " />
        </div>
        <div className="mt-4">
          <p className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            placeat corrupti laborum iure veniam, facere laboriosam perspiciatis
            ab consectetur molestias?
          </p>
          <p
            onClick={() => setShowAnswer((prev) => !prev)}
            className="text-end cursor-pointer"
          >
            answer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
