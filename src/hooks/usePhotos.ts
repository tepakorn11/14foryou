import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface Photo {
  id: string;
  src: string;
  caption: string;
  rotation: number;
}

const defaultPhotos: Photo[] = [
  {
    id: '1',
    src: '',
    caption: '🌸 วันแรกที่เจอกัน',
    rotation: -5,
  },
  {
    id: '2',
    src: '',
    caption: '💕 ไปเดทด้วยกัน',
    rotation: 3,
  },
  {
    id: '3',
    src: '',
    caption: '🎂 วันเกิดที่พิเศษ',
    rotation: -2,
  },
  {
    id: '4',
    src: '',
    caption: '✨ รูปล่าสุดที่ถ่ายด้วยกัน',
    rotation: 4,
  },
];

export function usePhotos() {
  const [photos, setPhotos] = useLocalStorage<Photo[]>('valentine-photos', defaultPhotos);

  const updatePhoto = useCallback((id: string, updates: Partial<Photo>) => {
    setPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, ...updates } : photo
      )
    );
  }, [setPhotos]);

  const handleImageUpload = useCallback((id: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      updatePhoto(id, { src: base64String });
    };
    reader.readAsDataURL(file);
  }, [updatePhoto]);

  const updateCaption = useCallback((id: string, caption: string) => {
    updatePhoto(id, { caption });
  }, [updatePhoto]);

  return {
    photos,
    updatePhoto,
    handleImageUpload,
    updateCaption,
  };
}
