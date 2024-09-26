import React from 'react';

interface CustomChipProps {
  label: string;
  bgColor?: string;
  textColor?: string;
}

const CustomChip: React.FC<CustomChipProps> = ({ label, bgColor = 'bg-principalBlue', textColor = 'text-white' }) => {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
      {label}
    </div>
  );
};

export default CustomChip;
