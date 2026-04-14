import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  return (
    <Section id="tentang">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop" 
                alt="Coffee Roasting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-3xl hidden md:block shadow-xl">
              <p className="text-accent font-bold text-4xl mb-1">10+</p>
              <p className="text-accent/80 text-sm uppercase tracking-widest font-medium">Tahun Pengalaman</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Cerita Kami</h2>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Warkop NikiKula lahir dari kecintaan mendalam terhadap kekayaan kopi Nusantara. Kami percaya bahwa setiap biji kopi memiliki cerita unik yang layak untuk dirayakan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Premium Beans</h4>
                <p className="text-gray-500 text-sm">Kami hanya menggunakan biji kopi pilihan dengan grade tertinggi dari petani lokal.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Modern Experience</h4>
                <p className="text-gray-500 text-sm">Menghadirkan suasana warkop yang nyaman dengan sentuhan desain modern.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Tech-Enabled</h4>
                <p className="text-gray-500 text-sm">Pesan kopi favoritmu dengan mudah melalui aplikasi mobile kami.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-xl">Community First</h4>
                <p className="text-gray-500 text-sm">Menjadi ruang kolaborasi dan berkumpul bagi para pecinta kopi.</p>
              </div>
            </div>
            
            <Button variant="outline" className="mt-4">Selengkapnya</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
