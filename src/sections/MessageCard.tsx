export function MessageCard() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            💌 จดหมายถึงเธอ 💌
          </h2>
        </div>

        {/* Paper Note */}
        <div className="paper-note rounded-lg p-8 md:p-12">
          <div className="text-center">
            <p className="text-6xl mb-6">💕</p>
          </div>

          <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-4 text-center">
            <p className="font-bold text-pink-500 text-2xl">
              สุขสันต์วันวาเลนไทน์นะคะที่รัก! 🌹
            </p>

            <p>
              ขอบคุณที่อยู่ด้วยกันมาตลอดนะสัญญาว่าจะพาไปออกกำลังกายและกินของอร่อย
            </p>

            <p className="font-bold text-pink-500 text-2xl mt-6">
              รักนะแก 💕
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-4xl">🌸✨🌷</p>
          </div>
        </div>
      </div>
    </section>
  );
}
