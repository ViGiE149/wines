// pages/page.js
import React from 'react';
import AddWineServer from '../components/addWineForm';

export default function Page() {
  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-2xl font-bold'>Add Wine</h2>
      <AddWineServer />
    </div>
  );
}
