import React from 'react';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Website</h1>
      <p className="text-center mb-4">This is a simple page created with React and Tailwind CSS.</p>
      <div className="flex justify-center">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('Button clicked!')}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Index;