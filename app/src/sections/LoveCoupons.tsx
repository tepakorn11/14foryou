const coupons = [
  {
    icon: '🍜',
    title: 'คูปองเลี้ยงข้าวฟรี!',
    description: 'เลือกร้านที่เธออยากกินได้เลย ฉันเลี้ยง! (แต่ถ้าแพงมากขอหารนะ 😂)',
  },
  {
    icon: '💆',
    title: 'คูปองนวดให้ฟรี!',
    description: 'นวดไหล่ นวดหลัง นวดเท้า ตามใจเธอเลย (แต่อย่าให้นวดนานเกิน 30 นาที เดี๋ยวมือล็อก 😅)',
  },
  {
    icon: '🎬',
    title: 'คูปองดูหนังด้วยกัน!',
    description: 'เลือกหนังที่เธออยากดู ถ้าเป็นหนังรักโรแมนติก ฉันจะไม่หลับ! (พยายาม 😴)',
  },
  {
    icon: '🛍️',
    title: 'คูปองพาไปช็อปปิ้ง!',
    description: 'พาไปเดินห้าง ถือกระเป๋าให้ รอให้ (แต่ถ้าซื้อเยอะเกินไปขอตัดบัตรเครดิตนะ 💳)',
  },
  {
    icon: '🍰',
    title: 'คูปองซื้อขนมให้!',
    description: 'อยากกินอะไรบอกมา ฉันซื้อให้! (แต่ถ้ากินเยอะเกินไปขออนุญาติห้ามนะ 😂)',
  },
  {
    icon: '🤗',
    title: 'คูปองกอดฟรี!',
    description: 'กอดเมื่อไหร่ก็ได้ ที่ไหนก็ได้ ไม่มีเงื่อนไข! (ยกเว้นตอนกำลังขับรถนะ 😅)',
  },
];

export function LoveCoupons() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            🎟️ Love Coupons 🎟️
          </h2>
          <p className="text-xl text-pink-400">
            คูปองพิเศษสำหรับเธอเท่านั้น! ใช้ได้ตลอดชีพ~ 💕
          </p>
        </div>
        
        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon, index) => (
            <div key={index} className="coupon-card p-6 text-center">
              <div className="text-5xl mb-4">{coupon.icon}</div>
              <h3 className="text-xl font-bold text-pink-500 mb-2">{coupon.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{coupon.description}</p>
              <div className="bg-pink-100 rounded-full py-2 px-4 inline-block">
                <span className="text-pink-500 font-bold text-sm">✓ ใช้ได้ไม่จำกัดครั้ง</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-pink-400 mt-8 text-lg">
          💕 คูปองทั้งหมดนี้ไม่มีวันหมดอายุ ใช้ได้ตลอดชีพ! 💕
        </p>
      </div>
    </section>
  );
}
