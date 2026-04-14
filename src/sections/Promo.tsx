import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';

export const Promo: React.FC = () => {
  const promos = [
    {
      title: 'Beli 1 Gratis 1',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop',
      tag: 'Limited Time'
    },
    {
      title: 'Diskon 30% App Only',
      image: 'https://images.unsplash.com/photo-1497933321188-941f9ad36b12?q=80&w=2069&auto=format&fit=crop',
      tag: 'Mobile App'
    },
    {
      title: 'Free Delivery',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop',
      tag: 'Weekend'
    }
  ];

  return (
    <Section id="promo" className="bg-gray-50">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Promo Spesial Untuk Kamu</h2>
            <p className="text-gray-500">Jangan lewatkan penawaran menarik setiap harinya.</p>
          </div>
          <a href="#" className="text-secondary font-semibold hover:underline hidden md:block">Lihat Semua</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-3xl aspect-[16/9] cursor-pointer"
            >
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-accent">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                  {promo.tag}
                </span>
                <h3 className="text-xl font-bold">{promo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
