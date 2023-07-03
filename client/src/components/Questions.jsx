import React, { useState } from 'react';

const Questions = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="mt-20">
      <div className="w-[80%] ml-20">
        <div className="flex justify-between font-semibold relative ">
          <h3 className="text-3xl">Behavioural</h3>
          <a href="/mybank" className="text-primary">
            add +{' '}
          </a>
          <div className="line bg-primary " />
        </div>
        <div className="mt-4">
          <p className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            placeat corrupti laborum iure veniam, facere laboriosam perspiciatis
            ab consectetur molestias?
          </p>
          <p
            className="text-end cursor-pointer"
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
      <div className="w-[80%] ml-20">
        <div className="flex justify-between font-semibold relative ">
          <h3 className="text-3xl">Technical</h3>
          <a href="/mybank" className="text-primary">
            add +{' '}
          </a>
          <div className="line bg-primary " />
        </div>
        <div className="mt-4">
          <p className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
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
