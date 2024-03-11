import React from "react";
import { ContentfulHeader } from "../../pages";
import HeaderVideo from "../../videos/Alpin_Promo.mp4";

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
      <source src={HeaderVideo} type="video/mp4" />
    </video>
  );
};

export default Video;
