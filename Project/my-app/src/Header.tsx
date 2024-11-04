import React from 'react';

const Header: React.FC = () => {
  return (
    <nav data-layername="navGlobal" className="flex flex-col bg-neutral-900 bg-opacity-80 px-[462px] max-md:px-5">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/113be918aea5339ccdd15137002fa5c4d35f5513b7c9d13a60e90a712e3f3c4c?placeholderIfAbsent=true&apiKey=fb36c159255446739d50aae2acecd2d8" 
        alt="Navigation logo" 
        className="object-contain max-w-full aspect-[22.73] w-[996px]"
      />
    </nav>
  );
};

export default Header;