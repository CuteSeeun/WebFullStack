import React from 'react';
import Button from './button';

interface MacBookProProps {
  title: string;
  subtitle: string;
  availableDate: string;
  learnMoreText: string;
  preOrderText: string;
  intelligenceText: string;
}

const MacBookPro: React.FC<MacBookProProps> = ({
  title,
  subtitle,
  availableDate,
  learnMoreText,
  preOrderText,
  intelligenceText
}) => {
  return (
    <section className="flex relative flex-col items-center max-w-full w-[318px]">
      <h2 className="self-stretch text-5xl font-semibold tracking-tight leading-none text-neutral-100 max-md:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-2xl tracking-wide leading-none text-neutral-100">
        {subtitle}
      </p>
      <p className="mt-5 text-lg tracking-wide leading-none text-zinc-500">
        {availableDate}
      </p>
      <div className="flex gap-4 mt-4 max-w-full text-lg tracking-tight leading-none w-[266px]">
        <Button variant="primary">{learnMoreText}</Button>
        <Button variant="secondary">{preOrderText}</Button>
      </div>
      <p className="mt-96 text-xl font-medium leading-none max-md:mt-10">
        {intelligenceText}
      </p>
    </section>
  );
};

export default MacBookPro;