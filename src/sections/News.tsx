import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';

export const News: React.FC = () => {
  const news = [
    {
      title: 'Promo Terbaru 2026: Cashback 50%',
      date: '12 April 2026',
      excerpt: 'Nikmati kemudahan transaksi dengan dompet digital pilihan dan dapatkan cashback hingga 50%.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop'
    },
    {
      title: 'Kolaborasi Spesial dengan Seniman Lokal',
      date: '05 April 2026',
      excerpt: 'Warkop NikiKula menghadirkan merchandise eksklusif hasil kolaborasi dengan ilustrator ternama.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Menu Baru: Salted Caramel Macchiato',
      date: '28 Maret 2026',
      excerpt: 'Rasakan perpaduan manis gurih karamel dengan espresso yang intens dalam menu terbaru kami.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Berita & Artikel</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl aspect-video mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">{item.date}</p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
};
