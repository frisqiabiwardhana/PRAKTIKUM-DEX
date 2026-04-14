/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Products } from './sections/Products';
import { Promo } from './sections/Promo';
import { About } from './sections/About';
import { News } from './sections/News';
import { Testimonials } from './sections/Testimonials';
import { AppCTA } from './sections/AppCTA';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Promo />
        <About />
        <News />
        <Testimonials />
        <AppCTA />
      </main>
      <Footer />
    </div>
  );
}
