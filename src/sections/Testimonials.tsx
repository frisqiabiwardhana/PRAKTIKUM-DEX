import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Andi Wijaya',
      role: 'Coffee Enthusiast',
      text: 'Aren Latte di sini benar-benar juara. Rasa gula arennya autentik dan tidak menutupi rasa kopinya. Tempatnya juga sangat nyaman untuk kerja.'
    },
    {
      name: 'Siska Putri',
      role: 'Digital Nomad',
      text: 'Warkop NikiKula adalah basecamp favorit saya. Internetnya kencang, kopinya enak, dan pelayanannya sangat ramah. Highly recommended!'
    },
    {
      name: 'Budi Santoso',
      role: 'Food Blogger',
      text: 'Salah satu coffee shop terbaik di kota ini. Mereka sangat memperhatikan kualitas biji kopi dan cara penyajiannya. Konsistensi rasanya luar biasa.'
    }
  ];

  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Mereka</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 text-secondary/20 w-12 h-12" />
              <p className="text-gray-600 italic mb-8 relative z-10">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-lg">{t.name}</h4>
                <p className="text-secondary text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
