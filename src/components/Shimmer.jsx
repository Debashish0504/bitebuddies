import React from 'react';

function Shimmer() {
  const shimmerCount = 8;
  const shimmerArray = Array(shimmerCount).fill(0);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          className="w-72 h-auto  rounded-2xl overflow-hidden animate-pulse"
        >
          <div className="h-44 w-full bg-gray-300 rounded-t-2xl" />

          <div className="h-4 bg-gray-300 rounded mt-4 mx-4 w-2/3" />

          <div className="h-4 bg-gray-300 rounded mt-2 mx-4 w-1/3" />

          <div className="h-4 bg-gray-300 rounded mt-4 mx-4 w-3/4" />

          <div className="h-4 bg-gray-300 rounded mt-2 mb-4 mx-4 w-2/4" />
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
