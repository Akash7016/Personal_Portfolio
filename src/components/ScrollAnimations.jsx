import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll([
      '.animate-on-scroll',
      '.project-card',
      '.contact__item',
      '.footer__section'
    ].join(','));

    animateElements.forEach((el) => observer.observe(el));

    // Parallax effect for mouse movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      
      // Apply parallax to background elements
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const depth = (index + 1) * 0.5;
        const x = offsetX * depth * 20;
        const y = offsetY * depth * 20;
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    // Smooth scroll behavior
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Parallax background
      const parallaxBgs = document.querySelectorAll('.parallax-bg');
      parallaxBgs.forEach((bg) => {
        bg.style.transform = `translate3d(0, ${rate}px, 0)`;
      });

      // Header background blur
      const header = document.querySelector('.header');
      if (header) {
        const opacity = Math.min(scrolled / 100, 1);
        header.style.background = `rgba(15, 15, 35, ${0.85 + opacity * 0.15})`;
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimations;