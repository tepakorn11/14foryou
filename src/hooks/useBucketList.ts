import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface BucketItem {
  id: string;
  text: string;
  subtext: string;
  completed: boolean;
}

const defaultBucketList: BucketItem[] = [
  { id: '1', text: 'ไปเที่ยวทะเลด้วยกัน', subtext: 'ถ่ายรูปคู่สวยๆ ริมทะเล~', completed: false },
  { id: '2', text: 'ทำอาหารด้วยกัน', subtext: 'แม้จะไหม้บ้าง แต่ก็สนุก! 😂', completed: false },
  { id: '3', text: 'ไปดูคอนเสิร์ตด้วยกัน', subtext: 'วงไหนก็ได้ที่เธอชอบ!', completed: false },
  { id: '4', text: 'ไปเที่ยวต่างประเทศ', subtext: 'เก็บตังค์ไว้ก่อนนะ 😅', completed: false },
  { id: '5', text: 'เลี้ยงสัตว์ด้วยกัน', subtext: 'หมาหรือแมวดีน้า~ 🐕🐈', completed: false },
  { id: '6', text: 'ไปดูพลุด้วยกัน', subtext: 'โรแมนติกสุดๆ ✨', completed: false },
  { id: '7', text: 'ไปคาเฟ่แมว/หมา', subtext: 'น่ารักมากกก 🐱', completed: false },
  { id: '8', text: 'ไปดูดาวด้วยกัน', subtext: 'นอนดูดาวบนดาดฟ้า~ 🌟', completed: false },
  { id: '9', text: 'ไปตลาดนัดรถไฟด้วยกัน', subtext: 'กินของอร่อยเยอะๆ 😋', completed: false },
  { id: '10', text: 'ไปสวนสนุกด้วยกัน', subtext: 'เล่นเครื่องเล่นให้ครบ! 🎢', completed: false },
];

export function useBucketList() {
  const [bucketList, setBucketList] = useLocalStorage<BucketItem[]>('valentine-bucket-list', defaultBucketList);

  const toggleItem = useCallback((id: string) => {
    setBucketList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }, [setBucketList]);

  const updateItem = useCallback((id: string, updates: Partial<BucketItem>) => {
    setBucketList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  }, [setBucketList]);

  const completedCount = bucketList.filter((item) => item.completed).length;
  const totalCount = bucketList.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return {
    bucketList,
    toggleItem,
    updateItem,
    completedCount,
    totalCount,
    progress,
  };
}
