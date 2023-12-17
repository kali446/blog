"use client";
import React, { useState, useEffect } from "react";
import { truncateString } from "@/utils";
import Link from "next/link";

interface Props {
  titleOnly?: boolean;
  data: {
    name: string;
    slug?: string;
    description?: string;
  };
}

const SectionHeader = ({ titleOnly = false, data }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (data?.description) {
      if (data.description.length > 200) {
        setShowFullDescription(false);
      } else {
        setShowFullDescription(true);
      }
    }
  }, []);

  return (
    <div className="mb-5 grid grid-cols-12 items-center">
      <div className="xs:col-span-10 col-span-8 flex flex-col gap-2">
        <h2 className="mobile414:text-[1.5rem] text-[2.25rem] font-bold tracking-normal text-light-primary dark:text-white md:text-[2.25rem] sm:text-[1.75rem]">
          {data?.name}
        </h2>

        {!titleOnly && (
          <p className="w-[80%] text-[1.1rem] font-light leading-relaxed text-light-secondary/90 dark:text-dark-contrast-800 md:hidden">
            {!showFullDescription ? (
              <Link href={`/category/${data?.slug}`}>
                {truncateString(data?.description || "", 150)}
                <span className="hover:bg-blue-600 text-blue-600 ml-2 inline-flex cursor-pointer items-center gap-1 rounded-full bg-white px-[.75rem] py-[.5rem] text-[.65rem] font-semibold uppercase leading-none drop-shadow-sm transition-all duration-300 hover:text-white">
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
              </Link>
            ) : (
              <>{data?.description}</>
            )}
          </p>
        )}
      </div>

      {!titleOnly && (
        <div className="xs:col-span-2 col-span-4 ml-auto inline-block">
          <Link href={`/category/${data?.slug}`}>
            <div className="group inline-flex cursor-pointer items-center gap-2">
              <span className="shrink-0 text-sm font-medium capitalize text-accent xs:hidden">
                See more {data?.name}
              </span>

              <div className="mobile414:h-[1.95rem] mobile414:w-[1.95rem] flex h-[2.15rem] w-[2.15rem] items-center justify-center rounded-full bg-white text-accent shadow-sm group-hover:bg-accent group-hover:text-white">
                <svg
                  className="rotate-[270deg] transition-all duration-200 group-hover:translate-x-[3px]"
                  width={13}
                  height={"auto"}
                  viewBox="0 0 342 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M192.333 21.3333C192.333 15.6754 190.086 10.2492 186.085 6.24839C182.084 2.24761 176.658 0 171 0C165.342 0 159.916 2.24761 155.915 6.24839C151.914 10.2492 149.667 15.6754 149.667 21.3333V311.168L36.7493 198.251C32.7258 194.365 27.337 192.214 21.7434 192.263C16.1499 192.312 10.7992 194.555 6.84385 198.511C2.88848 202.466 0.644872 207.817 0.596265 213.41C0.547659 219.004 2.69795 224.392 6.58399 228.416L155.917 377.749C159.918 381.749 165.343 383.995 171 383.995C176.657 383.995 182.082 381.749 186.083 377.749L335.416 228.416C339.302 224.392 341.452 219.004 341.404 213.41C341.355 207.817 339.111 202.466 335.156 198.511C331.201 194.555 325.85 192.312 320.257 192.263C314.663 192.214 309.274 194.365 305.251 198.251L192.333 311.168V21.3333Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
