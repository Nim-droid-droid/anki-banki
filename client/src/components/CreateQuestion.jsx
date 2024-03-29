import React from 'react';
import polygon from './assets/polygon.svg';

const CreateQuestion = () => {
  return (
    <>
      <form className="font-Inter w-[70%]  border-lightGray border-4   mt-10 py-6 px-10 rounded-[10px] mx-auto">
        <div className="flex flex-col">
          <h3 className=" text-2xl font-semibold">
            <span className="text-2xl text-orange">•</span> Create New Question
          </h3>
          <hr className="bg-orange h-1" />
          <textarea
            name="question"
            cols="10"
            rows="5"
            className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-xl text-darkGray text-[27px] focus:text-darkCharcoal"
            placeholder="type your question here..."
          />
          <textarea
            name="answer"
            cols="10"
            rows="5"
            className="my-2 outline-none border-green border-2 rounded-lg p-2 text-xl text-darkGray text-[27px] focus:text-darkCharcoal"
            placeholder="type your answer here..."
          />
          <div className="flex justify-between mt-2 ">
            <button className="flex gap-2 btn border-blue border-2 h-[56px] justify-center items-center text-[24px] font-medium">
              add to existing category
              <img src={polygon} alt="" className="w-3  mt-1" />
            </button>
            <button className=" btn w-[362px] h-[56px] border-orange border-2 text-[24px] font-medium">
              add to new category{' '}
              <span className="text-orange font-bold text-2xl ml-5"> +</span>
            </button>
            <button
              type="button"
              className="btn w-[238px] h-[ 56px] bg-blue text-[24px] font-bold"
            >
              add question
            </button>
          </div>
        </div>
      </form>
      <p className="ml-[15%] mt-6 text-darkGray tracking-wider text-[24px]">
        This project was made by students and is not associated with 100devs.
      </p>
    </>
  );
};

export default CreateQuestion;
