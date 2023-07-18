import React from 'react';

const CreateQuestion = () => {
  return (
    <>
      <form className="w-[70%]  border-gray100 border-4   mt-10 py-6 px-10 rounded-lg mx-auto">
        <div className="flex flex-col">
          <h3 className=" text-2xl font-semibold">
            <span className="text-2xl text-orange">•</span> Create New Question
          </h3>
          <hr className="bg-orange h-1" />
          <textarea
            name="question"
            cols="10"
            rows="5"
            className="my-4 outline-none border-blue border-2  rounded-lg p-2 text-xl text-darkGray"
            placeholder="type your question here..."
          />
          <textarea
            name="answer"
            cols="10"
            rows="5"
            className="my-2 outline-none border-blue border-2 rounded-lg p-2 text-xl text-darkGray"
            placeholder="type your question here..."
          />
          <div className="flex justify-between mx-6 mt-2">
            <button className="btn border-blue border-2">
              add to existing category
            </button>
            <button className="btn border-orange border-2">
              add to new category
            </button>
            <button type="button" className="btn bg-blue">
              add question
            </button>
          </div>
        </div>
      </form>
      <p className="ml-[15%] mt-6 text-darkGray tracking-wider">
        This project was made by students and is not associated with 100devs.
      </p>
    </>
  );
};

export default CreateQuestion;
