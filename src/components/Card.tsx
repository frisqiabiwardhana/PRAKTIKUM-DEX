import React from 'react';

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  hoverScale?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  image, 
  title, 
  subtitle, 
  description, 
  className = '',
  hoverScale = true
}) => {
  return (
    <div className={`group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ${hoverScale ? 'hover:shadow-xl hover:-translate-y-2' : ''} ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {subtitle && (
          <div className="absolute top-4 left-4 bg-secondary text-accent px-3 py-1 rounded-full text-xs font-medium">
            {subtitle}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 text-sm leading-relaxed">{description}</p>}
      </div>
    </div>
  );
};
