import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className='flex justify-center items-center bg-dark text-white/60'>
      <h1>&copy; SEPCEYOWOC {currentYear}</h1>
    </section>
  )
};

export default Copyright;
