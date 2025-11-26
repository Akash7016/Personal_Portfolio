import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const particlesRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create floating particles animation
  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      const startX = Math.random() * window.innerWidth;
      const duration = Math.random() * 3000 + 2000;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 215, 0, 0.6);
        border-radius: 50%;
        left: ${startX}px;
        bottom: -10px;
        pointer-events: none;
        animation: float ${duration}ms linear forwards;
      `;
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, duration);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  // Parallax mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;
      
      const floatingElements = heroRef.current.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const depth = (index + 1) * 0.5;
        element.style.transform = `translate(${offsetX * depth * 10}px, ${offsetY * depth * 10}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__particles" ref={particlesRef}></div>
      
      {/* Animated Background Elements */}
      <div className="hero__bg-elements">
        <div className="floating-element bg-circle bg-circle-1"></div>
        <div className="floating-element bg-circle bg-circle-2"></div>
        <div className="floating-element bg-circle bg-circle-3"></div>
        <div className="floating-element bg-square bg-square-1"></div>
        <div className="floating-element bg-square bg-square-2"></div>
      </div>
      
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">
              {/* <span className="greeting-text">Hello, I'm</span> */}
            </div>
            <h1 className="hero__title">
              <span className="hero__name">
                <span className="letter" data-letter="Y">Akash Yadav</span>
                
              </span>
            </h1>
            <h2 className="hero__subtitle">
              <span className="typewriter">Full Stack Developer & UI/UX Designer</span>
            </h2>
            <p className="hero__description">
              <span className="description-line">Fullstack and ML Platform Developer skilled in building scalable, data-driven applications and microservice-based infrastructures for AI/ML workloads. Experienced in designing secure APIs, orchestrating deployments with Kubernetes, and optimizing CI/CD pipelines for reliability and performance. Passionate about bridging data engineering and machine learning through robust backend architectures, distributed data pipelines, and real-time model inference systems.</span>
              {/* <span className="description-line">modern web applications. I specialize in React, Node.js, and</span> */}
              {/* <span className="description-line">creating intuitive user experiences that solve real-world problems.</span> */}
              {/* <span className="description-line">When I'm not coding, you'll find me exploring new technologies.</span> */}
            </p>
            {/* <div className="hero__stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div> */}
            <div className="hero__buttons">
              <button 
                onClick={scrollToProjects}
                className="hero__btn hero__btn--primary"
              >
                <span className="btn-text">View My Work</span>
                <div className="btn-shine"></div>
              </button>
              <a 
                href="#contact" 
                className="hero__btn hero__btn--secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="btn-text">Get In Touch</span>
                <div className="btn-ripple"></div>
              </a>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__image-container">
              <div className="image-frame">
                <div className="profile-glow"></div>
                <div className="hero__image-placeholder">
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                    <defs>
                      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffd700" />
                        <stop offset="50%" stopColor="#ff6b6b" />
                        <stop offset="100%" stopColor="#4ecdc4" />
                      </linearGradient>
                      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#667eea" />
                        <stop offset="100%" stopColor="#764ba2" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Animated background circles */}
                    <circle cx="150" cy="150" r="130" fill="url(#bgGrad)" opacity="0.1">
                      <animateTransform attributeName="transform" type="rotate" 
                        values="0 150 150;360 150 150" dur="20s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="150" cy="150" r="110" fill="none" stroke="url(#bgGrad)" strokeWidth="2" opacity="0.3">
                      <animateTransform attributeName="transform" type="rotate" 
                        values="360 150 150;0 150 150" dur="15s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Code editor representation */}
                    <rect x="75" y="80" width="150" height="140" rx="15" fill="url(#codeGrad)" opacity="0.9" filter="url(#glow)"/>
                    <rect x="80" y="85" width="140" height="130" rx="10" fill="#1a1a2e" opacity="0.8"/>
                    
                    {/* Window controls */}
                    <circle cx="92" cy="97" r="3" fill="#ff6b6b"/>
                    <circle cx="102" cy="97" r="3" fill="#ffd700"/>
                    <circle cx="112" cy="97" r="3" fill="#4ecdc4"/>
                    
                    {/* Code lines */}
                    <rect x="90" y="110" width="60" height="3" rx="1.5" fill="#ffd700" opacity="0.8">
                      <animate attributeName="width" values="60;80;60" dur="3s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="90" y="120" width="100" height="3" rx="1.5" fill="#4ecdc4" opacity="0.6"/>
                    <rect x="95" y="130" width="80" height="3" rx="1.5" fill="#ff6b6b" opacity="0.7"/>
                    <rect x="95" y="140" width="40" height="3" rx="1.5" fill="#ffd700" opacity="0.5"/>
                    <rect x="90" y="150" width="90" height="3" rx="1.5" fill="#4ecdc4" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="95" y="160" width="70" height="3" rx="1.5" fill="#ff6b6b" opacity="0.6"/>
                    <rect x="90" y="170" width="50" height="3" rx="1.5" fill="#ffd700" opacity="0.7"/>
                    
                    {/* Floating elements */}
                    <g opacity="0.7">
                      <text x="180" y="130" fill="#ffd700" fontSize="20" fontFamily="monospace">{`</>`}</text>
                      <animateTransform attributeName="transform" type="translate" 
                        values="0 0;5 -5;0 0" dur="4s" repeatCount="indefinite"/>
                    </g>
                    
                    <g opacity="0.6">
                      <text x="200" y="160" fill="#4ecdc4" fontSize="16" fontFamily="monospace">{ }</text>
                      <animateTransform attributeName="transform" type="translate" 
                        values="0 0;-3 3;0 0" dur="3s" repeatCount="indefinite"/>
                    </g>
                    
                    <g opacity="0.8">
                      <text x="120" y="200" fill="#ff6b6b" fontSize="18" fontFamily="monospace">( )</text>
                      <animateTransform attributeName="transform" type="translate" 
                        values="0 0;3 -2;0 0" dur="5s" repeatCount="indefinite"/>
                    </g>
                    
                    {/* Terminal cursor */}
                    <rect x="150" y="177" width="2" height="12" fill="#ffd700">
                      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Decorative elements */}
                    <circle cx="60" cy="120" r="4" fill="#ffd700" opacity="0.5">
                      <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="240" cy="180" r="3" fill="#4ecdc4" opacity="0.6">
                      <animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="70" cy="220" r="2" fill="#ff6b6b" opacity="0.7">
                      <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </div>
                <div className="orbiting-icons">
                  <div className="orbit-icon orbit-icon-1">⚛️</div>
                  <div className="orbit-icon orbit-icon-2">🚀</div>
                  <div className="orbit-icon orbit-icon-3">💡</div>
                  <div className="orbit-icon orbit-icon-4">🎨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero__scroll">
          <div className="hero__scroll-indicator">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;