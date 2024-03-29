"use client"
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const WineList = () => {
  const [allWineData, setAllWineData] = useState([]);
  const [wineData, setWineData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getWineList?page=${currentPage}&limit=${itemsPerPage}`);

        if (!response.ok) {
          console.error('Failed to fetch wine data');
          return;
        }

        const data = await response.json();
        setAllWineData(data.result.rows);
        setWineData(data.result.rows);
      } catch (error) {
        console.error('Error fetching wine data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    // Apply the filter when searchQuery changes
    const filteredWineData = allWineData.filter((wine:any) =>
      wine.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setWineData(filteredWineData);
  }, [searchQuery, allWineData]);

  const handleSearchChange = (e:any) => {
    setSearchQuery(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = async (id:any) => {
    try {
      const response = await fetch('/api/deleteWine', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
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
    <div className="overflow-x-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
          Search Wine:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          type="text"
          placeholder="Enter wine name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <table className="table table-xs">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Year</th>
            <th className="py-2">Type</th>
            <th className="py-2">Varietal</th>
            <th className="py-2">Rating</th>
            <th className="py-2">Consumed</th>
            <th className="py-2">Date Consumed</th>
            <th className="py-2">Actions</th> {/* New column for delete button */}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(wineData) && wineData.length > 0 ? (
            wineData.map((wine:any) => (
              <tr key={wine.id} className="border-t">
                <td className="py-3 px-3">{wine.id}</td>
                <td className="py-2 px-3">{wine.name}</td>
                <td className="py-2 px-3">{wine.year}</td>
                <td className="py-2 px-3">{wine.type}</td>
                <td className="py-2 px-3">{wine.varietal}</td>
                <td className="py-2 px-3">{wine.rating}</td>
                <td className="py-2 px-3">{wine.consumed}</td>
                <td className="py-2 px-3">{wine.date_consumed}</td>
                <td className="py-2 px-3">
                  <button
                    onClick={() => handleDelete(wine.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td >No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-4">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4 font-bold">Page {currentPage}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextPage}
        >
          Next
        </button>

        <Link
          href="/addWine"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Wine
        </Link>
      </div>
    </div>
  );
};

export default WineList;
