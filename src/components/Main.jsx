import React from 'react';

// contains main content of app 
const Main = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
          {/* Insert your data visualization here */}
        </div>
      </div>
    </main>
  );
}

export default Main;
