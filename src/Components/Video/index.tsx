import React from 'react';
import { ContentfulHeader } from '../../pages';

// interface VideoProps {
// 	videoData: ContentfulHeader['backgroundVideo']['url'];
// }

const Video: React.FC<any> = ({ videoData }) => {
  return (
    <video
      autoPlay
      muted
      loop
      className="w-full h-[700px] lg:h-[850px] object-cover rounded-[8px]"
    >
      <source src="../../Videos/Alpin_Promo.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
