import { useEffect } from 'react';
import TubelightHeader from '../components/TubelightHeader';
import { AuroraHero } from '../components/ui/futuristic-hero-section';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation setup
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    // Smooth scrolling for all internal links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TubelightHeader />
      <main>
        <AuroraHero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
