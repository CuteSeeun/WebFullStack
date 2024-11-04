import React from 'react';
import Header from './Header';
import SectionOne from './sections/sectionOne/sectionOne';
// import Footer from './Footer';
// import ProductSection from './ProductSection';
// import AppSection from './AppSection';

const AppleIntelligence: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center">
      <div data-layername="1920WLight" className="flex relative flex-col flex-1 shrink self-stretch my-auto w-full bg-white basis-0 min-w-[240px] max-md:max-w-full">
        <Header />
        <SectionOne/>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AppleIntelligence;