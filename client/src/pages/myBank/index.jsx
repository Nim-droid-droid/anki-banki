import React from 'react';
import './style.css';
import MyBankFilter from '../../components/MyBankFilter/MyBankFilter';
import Questions from '../../components/Questions';
import PageLayout from '../../Layout';

const MyBank = () => {
  return (
    <PageLayout>
      <MyBankFilter />
      <Questions />
    </PageLayout>
  );
};

export default MyBank;
