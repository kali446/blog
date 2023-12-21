"use client";
import { truncateString } from "@/utils";
import React, { useEffect, useState } from "react";

interface Props {
  description?: string;
}

const Description = ({ description }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (description) {
      if (description.length > 200) {
        setShowFullDescription(false);
      } else {
        setShowFullDescription(true);
      }
    }
  }, []);

  if (!description) {
    return null;
  }

  return (
    <p className="w-full pb-6 pt-4 text-[1.1rem] font-light leading-relaxed text-light-primary dark:text-dark-contrast-900 md:w-full xs:text-[1rem]">
      {!showFullDescription ? (
        <>
          {truncateString(description, 200)}
          <span
            onClick={() => setShowFullDescription(true)}
            className="ml-2 inline-flex cursor-pointer items-center gap-1 rounded-full bg-white px-[.75rem] py-[.5rem] text-[.65rem] font-semibold uppercase leading-none text-blue-600 drop-shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white xs:text-[.55rem]"
          >
            <svg
              width={10}
              height={"auto"}
              viewBox="0 0 352 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M176 320C173.899 320.002 171.818 319.589 169.876 318.785C167.935 317.98 166.172 316.8 164.688 315.312L4.68802 155.312C-1.56398 149.06 -1.56398 138.936 4.68802 132.688C10.94 126.44 21.064 126.436 27.312 132.688L176 281.376L324.688 132.688C330.94 126.436 341.064 126.436 347.312 132.688C353.56 138.94 353.564 149.064 347.312 155.312L187.312 315.312C185.828 316.8 184.065 317.98 182.124 318.785C180.182 319.589 178.101 320.002 176 320ZM187.312 187.312L347.312 27.312C353.564 21.06 353.564 10.936 347.312 4.68802C341.06 -1.55998 330.936 -1.56398 324.688 4.68802L176 153.376L27.312 4.68802C21.06 -1.56398 10.936 -1.56398 4.68802 4.68802C-1.55998 10.94 -1.56398 21.064 4.68802 27.312L164.688 187.312C167.812 190.436 171.908 192 176 192C180.092 192 184.188 190.436 187.312 187.312Z"
                fill="currentColor"
              />
            </svg>
            read more
          </span>
        </>
      ) : (
        <>{description}</>
      )}
    </p>
  );
};

export default Description;
