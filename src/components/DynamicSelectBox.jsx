import React from 'react';
import { useForm } from 'react-hook-form';

const DynamicSelectBox = ({ name, label, options }) => {
  const { register } = useForm();

  return (
    <div className="flex flex-col mb-4 w-full max-w-sm">
      <label className="text-sm font-medium text-gray-700 mb-1">{label.split("_").join(" ").toUpperCase()}</label>
      <input
        list={`${name}-list`}
        name={name}
        {...register(name)}
        autoComplete="off"
        className="px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      <datalist id={`${name}-list`}>
        {options.map((option, idx) => (
          <option key={idx} value={option} />
        ))}
      </datalist>
    </div>
  );
};

export default DynamicSelectBox;
