import React from 'react';
import MacBookPro from './MacBookPro';

const SectionOne: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-28 text-center bg-black max-md:pt-24">
      <h1 className="text-5xl font-semibold tracking-tight leading-none text-neutral-100 max-md:max-w-full max-md:text-4xl">
        Apple Intelligence is here.
      </h1>
      <p className="mt-3.5 text-2xl tracking-wide leading-8 text-neutral-100 max-md:max-w-full">
        Experience it now on the latest iPhone, iPad, and Mac <br />
        models with a free software update.1
      </p>
      <div className="flex relative flex-col justify-center items-center self-stretch px-20 py-16 mt-20 w-full min-h-[692px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06462ba65fb56868689804528044a0ec3d8c664accc7b5bc713f5a117a7c0d97?placeholderIfAbsent=true&apiKey=fb36c159255446739d50aae2acecd2d8" 
          alt="MacBook Pro with Apple Intelligence" 
          className="object-cover absolute inset-0 size-full"
        />
        <MacBookPro
          title="MacBook Pro"
          subtitle="A work of smart."
          availableDate="Available starting 11.8"
          learnMoreText="Learn more"
          preOrderText="Pre-order"
          intelligenceText="Hello, Apple Intelligence."
        />
      </div>
    </main>
  );
};

export default SectionOne;