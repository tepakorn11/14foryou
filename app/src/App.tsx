import { FloatingHearts } from '@/components/FloatingHearts';
import { SectionDivider } from '@/components/SectionDivider';
import { Header } from '@/sections/Header';
import { PhotoGallery } from '@/sections/PhotoGallery';
import { LoveCoupons } from '@/sections/LoveCoupons';
import { BucketList } from '@/sections/BucketList';
import { MessageCard } from '@/sections/MessageCard';
import { SurpriseButton } from '@/sections/SurpriseButton';
import { Footer } from '@/sections/Footer';
import { usePhotos } from '@/hooks/usePhotos';
import { useBucketList } from '@/hooks/useBucketList';

function App() {
  const { photos, handleImageUpload, updateCaption } = usePhotos();
  const { bucketList, toggleItem, completedCount, totalCount, progress } = useBucketList();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE4EC] via-[#FFF8E7] to-[#E0F4FF]">
      <FloatingHearts />
      
      <Header />
      
      <PhotoGallery 
        photos={photos} 
        onImageUpload={handleImageUpload} 
        onCaptionChange={updateCaption} 
      />
      
      <SectionDivider icon="💕" />
      
      <LoveCoupons />
      
      <SectionDivider icon="✨" />
      
      <BucketList 
        bucketList={bucketList}
        onToggle={toggleItem}
        completedCount={completedCount}
        totalCount={totalCount}
        progress={progress}
      />
      
      <SectionDivider icon="💌" />
      
      <MessageCard />
      
      <SectionDivider icon="🎁" />
      
      <SurpriseButton />
      
      <Footer />
    </div>
  );
}

export default App;
