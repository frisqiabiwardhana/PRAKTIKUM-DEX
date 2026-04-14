import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${dark ? 'bg-primary text-accent' : 'bg-accent text-primary'} ${className}`}
    >
      {children}
    </section>
  );
};
