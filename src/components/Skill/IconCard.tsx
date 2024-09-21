import React from 'react';

interface IconCardProps {
  name: string;
  iconUrl: string;
}

const IconCard: React.FC<IconCardProps> = ({ name, iconUrl }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-4">
      <img src={iconUrl} alt={`${name} Icon`} className="w-16 h-16" />
      <h2 className="text-white font-mono">{name}</h2>
    </div>
  );
};


export default IconCard;
