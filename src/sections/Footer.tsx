import React from 'react';
import { Container } from '../components/Container';
import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-primary text-accent pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              Warkop <span className="text-secondary">NikiKula</span>
            </a>
            <p className="text-accent/60 text-sm leading-relaxed">
              Menghadirkan cita rasa kopi Nusantara dengan sentuhan modern. Temukan kebahagiaan di setiap cangkir kopi kami.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-accent/60 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#produk" className="hover:text-secondary transition-colors">Produk</a></li>
              <li><a href="#promo" className="hover:text-secondary transition-colors">Promo</a></li>
              <li><a href="#tentang" className="hover:text-secondary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Karir</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Bantuan</h4>
            <ul className="space-y-4 text-accent/60 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-accent/60 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Jl. Kopi Nikmat No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>hello@nikikula.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-accent/10 text-center text-accent/40 text-xs">
          <p>© 2026 Warkop NikiKula. All rights reserved. Made with ❤️ for coffee lovers.</p>
        </div>
      </Container>
    </footer>
  );
};
