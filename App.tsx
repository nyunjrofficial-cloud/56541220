import React, { useState } from 'react';
import { Menu, X, ArrowRight, Check, Star, ChevronDown, ChevronUp, Instagram, Facebook, Linkedin, Twitter, Sparkles, BarChart3, Bot, Settings, Search, Code2, Rocket, LineChart } from 'lucide-react';
import { 
  Navbar, 
  Hero, 
  Logos, 
  Services, 
  Process, 
  CaseStudies, 
  Benefits, 
  Pricing, 
  Testimonials, 
  FAQ, 
  CTA, 
  Footer 
} from './components/LandingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Process />
        <CaseStudies />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;