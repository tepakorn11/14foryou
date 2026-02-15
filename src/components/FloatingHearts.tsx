import { useEffect, useRef } from 'react';

const hearts = ['💕', '💖', '💗', '💓', '💝', '🌸', '✨'];

export function FloatingHearts() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
      
      container.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 6000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
}
