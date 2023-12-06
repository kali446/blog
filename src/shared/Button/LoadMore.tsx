import React from "react";

interface Props {}

const LoadMore = () => {
  return (
    <div className="group inline-flex cursor-pointer items-center gap-2">
      <span className="text-md font-semibold capitalize text-accent">load more</span>

      <div className="flex h-[2.15rem] w-[2.15rem] items-center justify-center rounded-full bg-white text-accent shadow-sm group-hover:bg-accent group-hover:text-white">
        <svg
          className="transition-all duration-200 group-hover:translate-y-[4px]"
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
  );
};

export default LoadMore;
