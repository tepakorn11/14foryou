export function Header() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Decorative Stickers */}
      <div className="absolute top-[10%] left-[10%] text-4xl opacity-80">🌸</div>
      <div className="absolute top-[15%] right-[15%] text-4xl opacity-80">💝</div>
      <div className="absolute bottom-[20%] left-[8%] text-4xl opacity-80">✨</div>
      <div className="absolute bottom-[25%] right-[10%] text-4xl opacity-80">🌷</div>

      {/* Main Title */}
      <div className="text-center z-10">
        <p className="text-xl md:text-2xl text-pink-400 mb-4 animate-pulse">
          🌹 Happy Valentine's Day 🌹
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-pink-500 mb-6 heartbeat">
          Happy Valentine's Day
        </h1>

        <p className="text-3xl md:text-4xl text-pink-400 mt-4">
          รักนะที่สุดในโลก 💕
        </p>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <p className="text-pink-400 text-lg mb-2">เลื่อนลงมาดูสิ 💌</p>
          <div className="text-4xl">👇</div>
        </div>
      </div>
    </header>
  );
}
