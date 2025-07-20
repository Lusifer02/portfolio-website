import { useState, useEffect } from 'react';
import './BackToTopButton.scss';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}>
      <button 
        className="back-to-top__button" 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg className="back-to-top__icon">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default BackToTopButton;