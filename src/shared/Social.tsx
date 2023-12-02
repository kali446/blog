import React from "react";

const Social = () => {
  return (
    <ul className="xs:gap-3 flex cursor-pointer items-center gap-4 text-light-secondary dark:text-dark-secondary">
      <li className="flex items-center gap-[.35rem]">
        <img
          className="h-[1.25rem] w-[auto]"
          src="/icons/facebook.svg"
          alt=""
        />
        <span className="text-xs font-medium uppercase">23</span>
      </li>

      <li className="flex items-center gap-[.35rem]">
        <div className="text-light-secondary dark:text-white">
          <svg
            width={15}
            height={15}
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_257_10)">
              <path
                d="M273.121 247.258L388.34 412.062H341.054L247.033 277.582V277.573L233.229 257.832L123.397 100.727H170.683L259.317 227.517L273.121 247.258Z"
                fill="currentColor"
              />
              <path
                d="M456.677 0H55.3227C24.7696 0 0 24.7696 0 55.3227V456.677C0 487.23 24.7696 512 55.3227 512H456.677C487.23 512 512 487.23 512 456.677V55.3227C512 24.7696 487.23 0 456.677 0ZM326.57 434.186L231.426 295.717L112.306 434.186H81.5194L217.756 275.829L81.5194 77.5511H185.43L275.524 208.672L388.323 77.5511H419.11L289.199 228.564H289.19L430.481 434.186H326.57Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_257_10">
                <rect width="512" height="512" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <span className="text-sm font-medium uppercase">23</span>
      </li>

      <li className="flex items-center gap-[.35rem]">
        <img
          className="h-[1.25rem] w-[auto]"
          src="/icons/instagram.svg"
          alt=""
        />

        <span className="text-sm font-medium uppercase">23</span>
      </li>

      <li className="flex items-center gap-[.35rem]">
        <img
          className="h-[1.25rem] w-[auto]"
          src="/icons/pinterest.svg"
          alt=""
        />

        <span className="text-sm font-medium uppercase">23</span>
      </li>
    </ul>
  );
};

export default Social;
