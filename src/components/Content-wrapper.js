import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Content from './Content';

const ContentWrapper = () => {
  return (
    <div className='content-wrapper'>
      <Navbar />
      <Content />
    </div>
  );
};

export default ContentWrapper;
