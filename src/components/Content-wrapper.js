import React from 'react';
import '../App.css';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

const ContentWrapper = () => {
  return (
    <div className='content-wrapper'>
      <Navbar />
      <Content />
    </div>
  );
};

export default ContentWrapper;
