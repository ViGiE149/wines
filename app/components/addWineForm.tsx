// pages/addWineServer.js
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddWineServer() {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    type: '',
    varietal: 'Red',
    rating: '',
    consumed: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddWine = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/addWine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Fetch Response:', data);

      if (response.ok) {
        console.log('Inserted wine:', data.result);
        // Redirect or perform any other action after successful insertion
        // router.push('/login'); // Replace '/login' with your desired route
      } else {
        console.error('Error inserting wine:', response.statusText);
      }
    } catch (error) {
      console.error('Error inserting wine:', error);
    }
  };

  return (
    <form className='w-80 mx-auto mt-4' onSubmit={handleAddWine}>
     
<input
        onChange={handleChange}
        value={formData.name}
        name='name'
        type='text'
        placeholder='Name'
        className='input input-bordered w-full max-w-xs m-1'
      />

      <input
        onChange={handleChange}
        value={formData.year}
        name='year'
        type='text'
        placeholder='Year'
        className='input input-bordered w-full max-w-xs shadow-2xl m-1'
      />

      <input
        onChange={handleChange}
        value={formData.type}
        name='type'
        type='text'
        placeholder='Type'
        className='input input-bordered w-full max-w-xs shadow-2xl m-1'
      />

      <select
        onChange={handleChange}
        value={formData.varietal}
        name='varietal'
        className='select select-bordered w-full max-w-xs shadow-2xl m-1'
      >
        <option value='Red'>Red</option>
        <option value='Red Blend'>Red Blend</option>
        <option value='White Blend'>White Blend</option>
        <option value='bland'>bland</option>
        {/* Add more options as needed */}
      </select>

      <input
        onChange={handleChange}
        value={formData.rating}
        name='rating'
        type='number'
        placeholder='Rating'
        className='input input-bordered w-full max-w-xs shadow-2xl m-1'
      />

   

<select
  onChange={handleChange}
  value={formData.consumed}
  name='consumed'
  className='select select-bordered w-full max-w-xs shadow-2xl m-1'
>
  <option value='' disabled selected>Consumed? Select Yes or No</option>
  <option value='yes'>Yes</option>
  <option value='no'>No</option>
</select>




      








      {/* Add Tailwind CSS classes to other input fields and elements */}
      {/* You can directly use Tailwind CSS classes for styling */}
      {/* For example: mt-4, px-4, bg-gray-100, rounded-md, etc. */}

      <button type='submit' className='btn btn-active mt-4'>
        Add Wine
      </button>
    </form>
  );
}