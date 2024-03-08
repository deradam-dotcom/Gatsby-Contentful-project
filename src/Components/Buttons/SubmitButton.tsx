import React from "react";
import { Link } from "gatsby";
import ArrowIcon from "../../images/Icons/rightArrow.inline.svg";

interface SubmitButtonProps {
  title: string;
  hasIcon?: boolean;
  isSmallFont?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  hasIcon = false,
  isSmallFont = false,
}) => {
  return (
    <button
      type="submit"
      className="flex w-auto justify-center gap-[10px] px-[20px] py-[10px] font-sharp font-medium text-text text-[16px] sm:text-[12px] lg:text-[16px] leading-[normal] bg-lead rounded-[30px] border-2 border-solid border-transparent no-underline"
    >
      {title}
      {hasIcon && <ArrowIcon />}
    </button>
  );
};

export default SubmitButton;
