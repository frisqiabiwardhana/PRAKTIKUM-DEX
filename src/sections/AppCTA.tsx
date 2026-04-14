import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';

export const AppCTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary overflow-hidden">
      <Container>
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-accent space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Kopi dalam satu klik</h2>
              <p className="text-accent/80 text-lg md:text-xl max-w-md">
                Pesan kopi favoritmu, kumpulkan poin, dan nikmati berbagai promo eksklusif hanya di aplikasi Warkop NikiKula.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" className="!bg-primary !text-accent">Download Sekarang</Button>
                <div className="flex items-center space-x-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-64 md:w-80 aspect-[9/19] bg-primary rounded-[3rem] border-8 border-primary/20 shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" 
                  alt="App Interface" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
