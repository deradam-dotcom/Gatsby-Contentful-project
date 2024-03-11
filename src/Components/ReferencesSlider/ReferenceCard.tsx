import React from "react";
import { navigate } from "gatsby";
import LinkButton from "../Buttons/LinkButton";

interface ReferenceCardProps {
  title: string;
  description: string;
  id: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({
  title,
  description,
  id,
}) => {
  const navigateToReferences = (id: string): Promise<void> => {
    return navigate(`/references#${id}`);
  };

  return (
    <div
      className="flex w-fit justify-between items-center mt-4 ml-2"
      onClick={() => navigateToReferences(id)}
    >
      <div className="flex flex-col items-start">
        <div className="font-sharp font-normal text-black text-[16px] tracking-[0] leading-[25px]">
          {title}
        </div>
        <div className="font-sharp_bold text-[20px]">{description}</div>
      </div>
      <div className="ml-[40px]">
        <LinkButton path="/references" />
      </div>
    </div>
  );
};

export default ReferenceCard;
