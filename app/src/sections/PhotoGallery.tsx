import { useRef, type ChangeEvent } from 'react';
import type { Photo } from '@/hooks/usePhotos';
import { Camera, Edit2 } from 'lucide-react';

interface PhotoGalleryProps {
  photos: Photo[];
  onImageUpload: (id: string, file: File) => void;
  onCaptionChange: (id: string, caption: string) => void;
}

export function PhotoGallery({ photos, onImageUpload, onCaptionChange }: PhotoGalleryProps) {
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleClick = (id: string) => {
    fileInputRefs.current[id]?.click();
  };

  const handleFileChange = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageUpload(id, file);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            📸 Our Story 💕
          </h2>
          <p className="text-xl text-pink-400">
            ความทรงจำดีๆ ที่มีด้วยกัน (กดที่รูปเพื่ออัพโหลดภาพ)
          </p>
        </div>
        
        {/* Polaroid Gallery */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="polaroid cursor-pointer"
              style={{ 
                transform: `rotate(${photo.rotation}deg)`,
                marginTop: index % 2 === 1 ? '30px' : '0'
              }}
              onClick={() => handleClick(photo.id)}
            >
              <input
                type="file"
                ref={(el) => { fileInputRefs.current[photo.id] = el; }}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(photo.id, e)}
              />
              
              <div className="relative w-[200px] h-[200px] bg-gray-100 overflow-hidden">
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    <Camera className="w-12 h-12 mb-2" />
                    <span className="text-sm">คลิกเพื่ออัพโหลดรูป</span>
                  </div>
                )}
              </div>
              
              <div className="mt-3 flex items-center justify-center gap-2">
                <input
                  type="text"
                  value={photo.caption}
                  onChange={(e) => onCaptionChange(photo.id, e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="text-center text-gray-600 text-sm bg-transparent border-none outline-none w-full"
                  placeholder="ใส่แคปชั่น..."
                />
                <Edit2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
