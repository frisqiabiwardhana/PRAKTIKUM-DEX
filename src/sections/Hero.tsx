import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
          alt="Coffee Aesthetic" 
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-accent leading-tight mb-6 tracking-tight">
            Grind The <span className="text-secondary">Essentials</span>
          </h1>
          <p className="text-lg md:text-xl text-accent/80 mb-10 leading-relaxed max-w-lg">
            Nikmati kopi terbaik dari biji pilihan Indonesia. Diproses dengan dedikasi untuk menghadirkan cita rasa yang tak terlupakan di setiap tegukan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="group">
              Lihat Menu
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="!border-accent !text-accent hover:!bg-accent hover:!text-primary">
              Download App
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
