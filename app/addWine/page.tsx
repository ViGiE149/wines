// pages/page.js
import React from 'react';
import Link from 'next/link'
import AddWineServer from '../components/addWineForm';

export default function Page() {
  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold'>Add Wine</h2>
      
        <Link
          href="/listWine"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Wine List
        </Link>
      <AddWineServer />
    </div>
  );
}
