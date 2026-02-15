// Hardcoded images as requested
import img1 from '@/imagres/1.png';
import img2 from '@/imagres/2.JPG';
import img3 from '@/imagres/3.JPG';
import img4 from '@/imagres/4.PNG';

interface PhotoGalleryProps {
  // Keeping interface for potential future use but making props optional to avoid errors if passed
  photos?: any[];
  onImageUpload?: any;
  onCaptionChange?: any;
}

export function PhotoGallery(_props: PhotoGalleryProps) {

  // We are overriding the dynamic photos with fixed ones for this specific request
  // But keeping the structure in case we want to revert to dynamic later.
  // Actually, the user said "Images fix เลย", so let's just render them directly.

  const fixedPhotos = [
    { id: '1', src: img1, caption: 'สถานที่แรกที่เจอกัน', rotation: -5 },
    { id: '2', src: img2, caption: 'ที่เที่ยวที่ประทับใจร่วมกัน', rotation: 3 },
    { id: '3', src: img3, caption: 'โมเมนต์ที่ประทับใจ', rotation: -2 },
    { id: '4', src: img4, caption: 'รูปคู่ล่าสุด', rotation: 4 },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            📸 Our Story 💕
          </h2>
          <p className="text-xl text-pink-400">
            ความทรงจำดีๆ ที่มีด้วยกัน
          </p>
        </div>

        {/* Polaroid Gallery */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {fixedPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="polaroid"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                marginTop: index % 2 === 1 ? '30px' : '0'
              }}
            >
              <div className="relative w-[200px] h-[200px] bg-gray-100 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                <p className="text-center text-gray-600 text-sm w-full">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
