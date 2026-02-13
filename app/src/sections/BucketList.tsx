import type { BucketItem } from '@/hooks/useBucketList';
import { Progress } from '@/components/ui/progress';

declare global {
  interface Window {
    confetti: (options: {
      particleCount?: number;
      spread?: number;
      angle?: number;
      origin?: { x?: number; y?: number };
      colors?: string[];
    }) => void;
  }
}

interface BucketListProps {
  bucketList: BucketItem[];
  onToggle: (id: string) => void;
  completedCount: number;
  totalCount: number;
  progress: number;
}

export function BucketList({ 
  bucketList, 
  onToggle, 
  completedCount, 
  totalCount, 
  progress 
}: BucketListProps) {
  
  const handleToggle = (id: string, completed: boolean) => {
    onToggle(id);
    
    if (!completed && window.confetti) {
      // Celebrate when checking
      window.confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#ff69b4', '#ffb6c1', '#ffd1dc'],
      });
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            📝 Our Bucket List 📝
          </h2>
          <p className="text-xl text-pink-400">
            สิ่งที่เราอยากทำด้วยกัน (ติ๊กถูกเมื่อทำแล้ว!)
          </p>
        </div>
        
        {/* Bucket List Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bucketList.map((item) => (
            <div 
              key={item.id} 
              className="bucket-item p-4 flex items-center gap-4 cursor-pointer"
              onClick={() => handleToggle(item.id, item.completed)}
            >
              <input
                type="checkbox"
                className="bucket-checkbox"
                checked={item.completed}
                onChange={() => {}}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex-1">
                <p className={`font-bold ${item.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                  {item.completed ? '✅' : '⬜'} {item.text}
                </p>
                <p className="text-sm text-gray-500">{item.subtext}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600 font-bold">ความคืบหน้า 🎯</span>
            <span className="text-pink-500 font-bold">{completedCount}/{totalCount} ({progress}%)</span>
          </div>
          <Progress value={progress} className="h-4" />
          <p className="text-center text-pink-400 mt-3 text-sm">
            ไปด้วยกันอีกเยอะเลย! สู้ๆ นะ 💪💕
          </p>
        </div>
      </div>
    </section>
  );
}
