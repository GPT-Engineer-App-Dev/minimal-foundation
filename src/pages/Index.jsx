import React, { useState } from 'react';

const Checkbox = ({ label, checked: initialChecked = false, onChange }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div
        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
          checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
        }`}
        onClick={handleChange}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
      <span className="text-sm">{label}</span>
    </label>
  );
};

const Index = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Custom Checkbox Example</h1>
      <Checkbox
        label="Check me!"
        checked={isChecked}
        onChange={(checked) => setIsChecked(checked)}
      />
      <p className="mt-4">
        Checkbox is {isChecked ? 'checked' : 'unchecked'}
      </p>
    </div>
  );
};

export default Index;