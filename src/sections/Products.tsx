import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

export const Products: React.FC = () => {
  const products = [
    {
      title: 'Aren Latte',
      subtitle: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=1974&auto=format&fit=crop',
      description: 'Perpaduan sempurna espresso, susu segar, dan gula aren asli Indonesia.'
    },
    {
      title: 'Pandan Latte',
      subtitle: 'Signature',
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4586d517?q=80&w=1974&auto=format&fit=crop',
      description: 'Cita rasa unik pandan yang harum berpadu dengan kelembutan latte.'
    },
    {
      title: 'Americano',
      subtitle: 'Classic',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop',
      description: 'Espresso murni dengan air panas, menonjolkan karakter biji kopi pilihan.'
    }
  ];

  return (
    <Section id="produk">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Produk Unggulan</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              {...product}
              className="fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
