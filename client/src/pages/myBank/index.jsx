import React from 'react';
import './style.css';
import MyBankFilter from '../../components/MyBankFilter/MyBankFilter';
import Questions from '../../components/Questions';

const MyBank = () => {
  return (
    <article>
      <MyBankFilter />
      <Questions />
    </article>
  );
};

export default MyBank;
