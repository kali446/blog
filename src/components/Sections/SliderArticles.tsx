"use client";
import React, { useRef } from "react";
import SectionHeader from "./SectionHeader";
import Slider from "react-slick";
import CardArticle5 from "../Cards/CardArticle5";
import { SectionSettings } from "@/utils/slider";

const SliderArticles = () => {
  const slider = useRef<Slider>(null);

  return (
    <div className="pb-section">
      <SectionHeader />

      <Slider ref={slider} {...SectionSettings}>
        {Array.from({ length: 10 }).map((item, i) => (
          <div key={i} className="xs:px-0 px-3">
            <CardArticle5 />
          </div>
        ))}
      </Slider>

      <div className="flex items-center justify-between pt-4">
        <div className="rounded-md bg-white px-3 py-1 text-xs font-medium text-black shadow-sm dark:bg-dark-layoutElement dark:text-white">
          <span className="pr-2">1</span>
          <span className="pr-2">/</span>
          <span className="text-light-contrast-600 dark:text-dark-contrast-800">
            2
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={() => {
              if (slider.current && slider.current.slickPrev) {
                slider.current.slickPrev();
              }
            }}
            className="group flex h-[2.2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-full bg-white text-accent shadow-sm transition-all duration-300 hover:bg-accent/20"
          >
            <svg
              className="rotate-[90deg] transition-all duration-200 group-hover:translate-x-[-3px]"
              width={15}
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
          <div
            onClick={() => {
              if (slider.current && slider.current.slickNext) {
                slider.current.slickNext();
              }
            }}
            className="group flex h-[2.2rem] w-[2.2rem] cursor-pointer items-center justify-center rounded-full bg-white text-accent shadow-sm transition-all duration-300 hover:bg-accent/20"
          >
            <svg
              className="rotate-[270deg] transition-all duration-200 group-hover:translate-x-[3px]"
              width={15}
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
      </div>
    </div>
  );
};

export default SliderArticles;
