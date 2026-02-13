declare global {
  interface Window {
    Swal: {
      fire: (options: {
        title?: string;
        html?: string;
        icon?: string;
        confirmButtonText?: string;
        showCloseButton?: boolean;
        backdrop?: string;
        customClass?: {
          popup?: string;
          title?: string;
          htmlContainer?: string;
          confirmButton?: string;
        };
      }) => Promise<void>;
    };
    confetti: (options: {
      particleCount?: number;
      spread?: number;
      angle?: number;
      origin?: { x?: number; y?: number };
      colors?: string[];
    }) => void;
  }
}

export function SurpriseButton() {
  const showSurprise = () => {
    const Swal = window.Swal;
    const confetti = window.confetti;
    
    if (!Swal || !confetti) return;
    
    // Fire confetti from multiple directions
    const duration = 3000;
    const end = Date.now() + duration;
    
    const colors = ['#ff0000', '#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb'];
    
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
      
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    
    // Center burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: colors,
      });
    }, 500);
    
    // Show SweetAlert
    setTimeout(() => {
      Swal.fire({
        title: 'รักนะที่สุดในโลก! 💕',
        html: `
          <div style="font-size: 1.2rem; line-height: 1.8;">
            <p style="font-size: 3rem; margin-bottom: 15px;">🌹💝🌹</p>
            <p>Happy Valentine's Day!</p>
            <p style="margin-top: 10px;">ขอบคุณที่อยู่ด้วยกันมาตลอด 💕</p>
            <p style="margin-top: 10px;">ไปต่อกันอีกนานๆ เลยน้า~</p>
            <p style="font-size: 2rem; margin-top: 15px;">💖💖💖</p>
          </div>
        `,
        icon: 'success',
        confirmButtonText: 'รักนะจุ๊บๆ 💕',
        showCloseButton: true,
        backdrop: `
          rgba(255, 182, 193, 0.4)
          url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff69b4' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")
        `,
        customClass: {
          popup: 'swal2-popup',
          title: 'swal2-title',
          htmlContainer: 'swal2-html-container',
          confirmButton: 'swal2-confirm',
        },
      });
    }, 800);
  };

  return (
    <section className="py-20 px-4 text-center relative">
      {/* Decorative Elements */}
      <div className="absolute top-[10%] left-[15%] text-4xl opacity-80">🎀</div>
      <div className="absolute top-[20%] right-[20%] text-4xl opacity-80">💫</div>
      <div className="absolute bottom-[15%] left-[20%] text-4xl opacity-80">🌺</div>
      <div className="absolute bottom-[20%] right-[15%] text-4xl opacity-80">💘</div>
      
      <div className="max-w-xl mx-auto">
        <p className="text-2xl text-pink-400 mb-8">
          พร้อมรับเซอร์ไพรส์รึยัง? 🎁
        </p>
        
        {/* Surprise Button */}
        <button 
          onClick={showSurprise}
          className="bouncy-btn bg-gradient-to-r from-pink-400 to-pink-500 
                     text-white text-2xl md:text-3xl font-bold py-6 px-12 
                     rounded-full shadow-lg hover:shadow-2xl 
                     border-4 border-white transition-all"
        >
          💝 กดตรงนี้สิเธอ 💝
        </button>
        
        <p className="text-pink-400 mt-6 text-lg">
          (กดดูสิ มีเซอร์ไพรส์น้า~ 💕)
        </p>
      </div>
    </section>
  );
}
