"use client";
import Link from "next/link";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
} from "react-share";

interface Props {
  url: string;
  title: string;
}

const Share2 = ({ url, title }: Props) => {
  const itemClasses = `dark:text-dark-secondary dark:border-dark-contrast-300 group relative flex h-[2.75rem] w-[2.75rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-light-contrast-400 text-light-secondary hover:border-none`;

  const itemIcon1Classes = `relative z-20 transition-all delay-75 duration-200 group-hover:translate-x-[200%]`;
  const itemIcon2Classes = `absolute left-[-50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%] text-white transition-all delay-75 duration-200 group-hover:left-[50%]`;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs uppercase text-light-primary dark:text-dark-secondary">
        share
      </span>

      {/* facebook */}
      <FacebookShareButton url={url}>
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <svg
              width={18}
              height={18}
              viewBox="0 0 266 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M172.651 512V278.47H251.006L262.761 187.432H172.651V129.318C172.651 102.968 179.938 85.0116 217.766 85.0116L265.933 84.9918V3.56429C257.603 2.4818 229.01 0 195.73 0C126.236 0 78.6594 42.4183 78.6594 120.301V187.432H0.0668945V278.47H78.6594V512H172.651Z"
                fill={"currentColor"}
              />
            </svg>
          </div>

          <div className={itemIcon2Classes}>
            <svg
              width={18}
              height={18}
              viewBox="0 0 266 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M172.651 512V278.47H251.006L262.761 187.432H172.651V129.318C172.651 102.968 179.938 85.0116 217.766 85.0116L265.933 84.9918V3.56429C257.603 2.4818 229.01 0 195.73 0C126.236 0 78.6594 42.4183 78.6594 120.301V187.432H0.0668945V278.47H78.6594V512H172.651Z"
                fill={"currentColor"}
              />
            </svg>
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-[#4a99e9] transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </FacebookShareButton>

      {/* instagram */}
      <InstapaperShareButton url={url}>
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <svg
              width={16}
              height={16}
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M511.5 150.529C510.3 123.324 505.901 104.622 499.598 88.4153C493.096 71.2129 483.094 55.8119 469.992 43.0084C457.187 30.0059 441.684 19.9019 424.681 13.5026C408.382 7.20141 389.776 2.80055 362.572 1.60231C335.163 0.300059 326.463 0 256.949 0C187.436 0 178.735 0.300059 151.429 1.50029C124.224 2.70053 105.522 7.10339 89.3194 13.4006C72.1121 19.9019 56.7111 29.9038 43.9076 43.0084C30.905 55.8109 20.8061 71.3139 14.4018 88.3173C8.10058 104.622 3.70072 123.224 2.50148 150.427C1.20023 177.836 0.89917 186.536 0.89917 256.05C0.89917 325.564 1.20023 334.265 2.39946 361.571C3.5997 388.776 8.00256 407.478 14.3048 423.685C20.8061 440.887 30.905 456.288 43.9076 469.092C56.7111 482.094 72.2141 492.198 89.2174 498.597C105.521 504.899 124.122 509.299 151.332 510.498C178.633 511.702 187.339 511.998 256.852 511.998C326.366 511.998 335.066 511.702 362.373 510.498C389.577 509.298 408.28 504.9 424.482 498.597C441.499 492.018 456.953 481.956 469.854 469.055C482.756 456.155 492.819 440.701 499.4 423.685C505.697 407.381 510.101 388.775 511.3 361.571C512.5 334.265 512.8 325.564 512.8 256.05C512.8 186.536 512.698 177.835 511.5 150.529ZM465.393 359.57C464.291 384.575 460.091 398.078 456.59 407.08C447.986 429.384 430.284 447.087 407.979 455.691C398.977 459.192 385.377 463.392 360.469 464.489C333.464 465.693 325.366 465.989 257.051 465.989C188.737 465.989 180.536 465.693 153.628 464.489C128.623 463.392 115.12 459.192 106.119 455.691C95.0196 451.588 84.9166 445.087 76.715 436.585C68.2133 428.284 61.712 418.282 57.6092 407.182C54.1086 398.18 49.9087 384.575 48.8115 359.672C47.6073 332.667 47.3112 324.563 47.3112 256.249C47.3112 187.935 47.6073 179.734 48.8115 152.831C49.9087 127.826 54.1086 114.323 57.6092 105.322C61.712 94.2174 68.2133 84.1164 76.817 75.9128C85.1146 67.4112 95.1166 60.9099 106.221 56.8121C115.223 53.3114 128.827 49.1106 153.73 48.0094C180.735 46.8091 188.839 46.5091 257.148 46.5091C325.565 46.5091 333.663 46.8091 360.571 48.0094C385.576 49.1116 399.079 53.3104 408.081 56.8111C419.18 60.9099 429.284 67.4112 437.484 75.9128C445.986 84.2155 452.487 94.2174 456.59 105.322C460.091 114.323 464.291 127.923 465.392 152.831C466.592 179.836 466.892 187.935 466.892 256.249C466.892 324.563 466.593 332.565 465.393 359.57Z"
                fill="currentColor"
              />
              <path
                d="M256.95 124.524C184.338 124.524 125.425 183.434 125.425 256.05C125.425 328.666 184.338 387.576 256.95 387.576C329.564 387.576 388.476 328.666 388.476 256.05C388.476 183.434 329.564 124.524 256.95 124.524ZM256.95 341.367C209.843 341.367 171.632 303.161 171.632 256.05C171.632 208.939 209.843 170.733 256.949 170.733C304.06 170.733 342.267 208.939 342.267 256.05C342.267 303.161 304.059 341.367 256.95 341.367ZM424.385 119.323C424.385 136.281 410.635 150.029 393.675 150.029C376.719 150.029 362.97 136.281 362.97 119.323C362.97 102.364 376.719 88.6194 393.676 88.6194C410.635 88.6194 424.385 102.363 424.385 119.323Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className={itemIcon2Classes}>
            <svg
              width={16}
              height={16}
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M511.5 150.529C510.3 123.324 505.901 104.622 499.598 88.4153C493.096 71.2129 483.094 55.8119 469.992 43.0084C457.187 30.0059 441.684 19.9019 424.681 13.5026C408.382 7.20141 389.776 2.80055 362.572 1.60231C335.163 0.300059 326.463 0 256.949 0C187.436 0 178.735 0.300059 151.429 1.50029C124.224 2.70053 105.522 7.10339 89.3194 13.4006C72.1121 19.9019 56.7111 29.9038 43.9076 43.0084C30.905 55.8109 20.8061 71.3139 14.4018 88.3173C8.10058 104.622 3.70072 123.224 2.50148 150.427C1.20023 177.836 0.89917 186.536 0.89917 256.05C0.89917 325.564 1.20023 334.265 2.39946 361.571C3.5997 388.776 8.00256 407.478 14.3048 423.685C20.8061 440.887 30.905 456.288 43.9076 469.092C56.7111 482.094 72.2141 492.198 89.2174 498.597C105.521 504.899 124.122 509.299 151.332 510.498C178.633 511.702 187.339 511.998 256.852 511.998C326.366 511.998 335.066 511.702 362.373 510.498C389.577 509.298 408.28 504.9 424.482 498.597C441.499 492.018 456.953 481.956 469.854 469.055C482.756 456.155 492.819 440.701 499.4 423.685C505.697 407.381 510.101 388.775 511.3 361.571C512.5 334.265 512.8 325.564 512.8 256.05C512.8 186.536 512.698 177.835 511.5 150.529ZM465.393 359.57C464.291 384.575 460.091 398.078 456.59 407.08C447.986 429.384 430.284 447.087 407.979 455.691C398.977 459.192 385.377 463.392 360.469 464.489C333.464 465.693 325.366 465.989 257.051 465.989C188.737 465.989 180.536 465.693 153.628 464.489C128.623 463.392 115.12 459.192 106.119 455.691C95.0196 451.588 84.9166 445.087 76.715 436.585C68.2133 428.284 61.712 418.282 57.6092 407.182C54.1086 398.18 49.9087 384.575 48.8115 359.672C47.6073 332.667 47.3112 324.563 47.3112 256.249C47.3112 187.935 47.6073 179.734 48.8115 152.831C49.9087 127.826 54.1086 114.323 57.6092 105.322C61.712 94.2174 68.2133 84.1164 76.817 75.9128C85.1146 67.4112 95.1166 60.9099 106.221 56.8121C115.223 53.3114 128.827 49.1106 153.73 48.0094C180.735 46.8091 188.839 46.5091 257.148 46.5091C325.565 46.5091 333.663 46.8091 360.571 48.0094C385.576 49.1116 399.079 53.3104 408.081 56.8111C419.18 60.9099 429.284 67.4112 437.484 75.9128C445.986 84.2155 452.487 94.2174 456.59 105.322C460.091 114.323 464.291 127.923 465.392 152.831C466.592 179.836 466.892 187.935 466.892 256.249C466.892 324.563 466.593 332.565 465.393 359.57Z"
                fill="currentColor"
              />
              <path
                d="M256.95 124.524C184.338 124.524 125.425 183.434 125.425 256.05C125.425 328.666 184.338 387.576 256.95 387.576C329.564 387.576 388.476 328.666 388.476 256.05C388.476 183.434 329.564 124.524 256.95 124.524ZM256.95 341.367C209.843 341.367 171.632 303.161 171.632 256.05C171.632 208.939 209.843 170.733 256.949 170.733C304.06 170.733 342.267 208.939 342.267 256.05C342.267 303.161 304.059 341.367 256.95 341.367ZM424.385 119.323C424.385 136.281 410.635 150.029 393.675 150.029C376.719 150.029 362.97 136.281 362.97 119.323C362.97 102.364 376.719 88.6194 393.676 88.6194C410.635 88.6194 424.385 102.363 424.385 119.323Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-[#d62976] transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </InstapaperShareButton>

      {/* twitter */}
      <Link
        href={`https://twitter.com/intent/tweet?text="${title}" by @manziljunior #ClonedVerse ${url}`}
        target="_blank"
      >
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <svg
              width={15}
              height={15}
              viewBox="0 0 502 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M298.662 216.797L485.167 0H440.971L279.029 188.242L149.686 0H0.504639L196.096 284.655L0.504639 512H44.7029L215.718 313.21L352.314 512H501.495L298.651 216.797H298.662ZM238.127 287.163L218.309 258.818L60.6281 33.2716H128.514L255.764 215.295L275.582 243.64L440.992 480.241H373.106L238.127 287.174V287.163Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className={itemIcon2Classes}>
            <svg
              width={15}
              height={15}
              viewBox="0 0 502 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M298.662 216.797L485.167 0H440.971L279.029 188.242L149.686 0H0.504639L196.096 284.655L0.504639 512H44.7029L215.718 313.21L352.314 512H501.495L298.651 216.797H298.662ZM238.127 287.163L218.309 258.818L60.6281 33.2716H128.514L255.764 215.295L275.582 243.64L440.992 480.241H373.106L238.127 287.174V287.163Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-black transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </Link>

      <WhatsappShareButton url={url}>
        <div className={itemClasses}>
          <div className={itemIcon1Classes}>
            <svg
              width={16}
              height={16}
              viewBox="0 0 479 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M408.54 69.756C363.634 24.7972 303.912 0.02625 240.287 0C109.184 0 2.485 106.696 2.4325 237.835C2.4145 279.756 13.3652 320.677 34.1807 356.748L0.4375 480L126.528 446.923C161.271 465.876 200.386 475.863 240.191 475.875H240.291C371.38 475.875 478.091 369.17 478.14 238.025C478.167 174.469 453.449 114.712 408.54 69.756ZM240.287 435.705H240.205C204.733 435.69 169.943 426.157 139.585 408.148L132.37 403.862L57.5455 423.491L77.5165 350.539L72.814 343.06C53.0245 311.583 42.574 275.203 42.592 237.849C42.6332 128.85 131.321 40.1715 240.367 40.1715C293.171 40.1887 342.809 60.7785 380.133 98.1465C417.457 135.514 438 185.185 437.983 238.01C437.936 347.017 349.255 435.705 240.287 435.705ZM348.727 287.641C342.785 284.665 313.565 270.292 308.115 268.306C302.672 266.323 298.705 265.335 294.747 271.282C290.783 277.23 279.395 290.618 275.927 294.582C272.458 298.549 268.995 299.047 263.051 296.071C257.107 293.097 237.958 286.819 215.256 266.572C197.59 250.813 185.663 231.351 182.195 225.404C178.732 219.451 182.165 216.544 184.802 213.274C191.235 205.285 197.678 196.909 199.658 192.946C201.641 188.978 200.648 185.507 199.16 182.533C197.678 179.56 185.792 150.307 180.841 138.403C176.013 126.82 171.117 128.383 167.467 128.203C164.004 128.029 160.04 127.994 156.077 127.994C152.115 127.994 145.676 129.479 140.227 135.433C134.78 141.383 119.429 155.759 119.429 185.012C119.429 214.265 140.725 242.524 143.696 246.491C146.666 250.459 185.605 310.487 245.221 336.228C259.4 342.357 270.469 346.01 279.103 348.749C293.341 353.272 306.293 352.634 316.535 351.104C327.955 349.396 351.695 336.726 356.651 322.844C361.603 308.962 361.603 297.064 360.114 294.582C358.632 292.104 354.668 290.618 348.727 287.641Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className={itemIcon2Classes}>
            <svg
              width={16}
              height={16}
              viewBox="0 0 479 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M408.54 69.756C363.634 24.7972 303.912 0.02625 240.287 0C109.184 0 2.485 106.696 2.4325 237.835C2.4145 279.756 13.3652 320.677 34.1807 356.748L0.4375 480L126.528 446.923C161.271 465.876 200.386 475.863 240.191 475.875H240.291C371.38 475.875 478.091 369.17 478.14 238.025C478.167 174.469 453.449 114.712 408.54 69.756ZM240.287 435.705H240.205C204.733 435.69 169.943 426.157 139.585 408.148L132.37 403.862L57.5455 423.491L77.5165 350.539L72.814 343.06C53.0245 311.583 42.574 275.203 42.592 237.849C42.6332 128.85 131.321 40.1715 240.367 40.1715C293.171 40.1887 342.809 60.7785 380.133 98.1465C417.457 135.514 438 185.185 437.983 238.01C437.936 347.017 349.255 435.705 240.287 435.705ZM348.727 287.641C342.785 284.665 313.565 270.292 308.115 268.306C302.672 266.323 298.705 265.335 294.747 271.282C290.783 277.23 279.395 290.618 275.927 294.582C272.458 298.549 268.995 299.047 263.051 296.071C257.107 293.097 237.958 286.819 215.256 266.572C197.59 250.813 185.663 231.351 182.195 225.404C178.732 219.451 182.165 216.544 184.802 213.274C191.235 205.285 197.678 196.909 199.658 192.946C201.641 188.978 200.648 185.507 199.16 182.533C197.678 179.56 185.792 150.307 180.841 138.403C176.013 126.82 171.117 128.383 167.467 128.203C164.004 128.029 160.04 127.994 156.077 127.994C152.115 127.994 145.676 129.479 140.227 135.433C134.78 141.383 119.429 155.759 119.429 185.012C119.429 214.265 140.725 242.524 143.696 246.491C146.666 250.459 185.605 310.487 245.221 336.228C259.4 342.357 270.469 346.01 279.103 348.749C293.341 353.272 306.293 352.634 316.535 351.104C327.955 349.396 351.695 336.726 356.651 322.844C361.603 308.962 361.603 297.064 360.114 294.582C358.632 292.104 354.668 290.618 348.727 287.641Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-[#25d366] transition-all duration-300 group-hover:scale-100"></div>
        </div>
      </WhatsappShareButton>

      {/* link */}
      <div className={itemClasses}>
        <div className={itemIcon1Classes}>
          <svg
            width={17}
            height={17}
            viewBox="0 0 416 416"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M241.944 190.064C239.842 190.068 237.761 189.655 235.819 188.851C233.878 188.046 232.115 186.865 230.632 185.376C205.68 160.424 165.08 160.416 140.12 185.376C138.644 186.904 136.878 188.123 134.926 188.961C132.974 189.8 130.875 190.241 128.75 190.26C126.626 190.278 124.519 189.873 122.553 189.069C120.586 188.264 118.8 187.076 117.298 185.574C115.795 184.072 114.607 182.285 113.803 180.319C112.998 178.353 112.593 176.246 112.612 174.121C112.63 171.997 113.072 169.897 113.91 167.945C114.749 165.993 115.968 164.228 117.496 162.752C154.928 125.312 215.832 125.32 253.256 162.752C255.493 164.989 257.016 167.84 257.633 170.943C258.25 174.047 257.933 177.263 256.723 180.186C255.512 183.109 253.462 185.608 250.831 187.366C248.201 189.124 245.108 190.063 241.944 190.064ZM230.632 281.336C206.048 281.336 181.464 271.976 162.752 253.264C161.224 251.788 160.005 250.022 159.166 248.07C158.328 246.118 157.886 244.019 157.868 241.894C157.849 239.77 158.254 237.663 159.059 235.697C159.863 233.73 161.051 231.944 162.554 230.441C164.056 228.939 165.842 227.751 167.809 226.947C169.775 226.142 171.882 225.737 174.006 225.756C176.131 225.774 178.23 226.216 180.182 227.054C182.134 227.893 183.9 229.112 185.376 230.64C210.328 255.592 250.928 255.6 275.888 230.64C277.364 229.112 279.129 227.893 281.081 227.054C283.034 226.216 285.133 225.774 287.258 225.756C289.382 225.737 291.489 226.142 293.455 226.947C295.422 227.751 297.208 228.939 298.71 230.441C300.213 231.944 301.401 233.73 302.205 235.697C303.01 237.663 303.414 239.77 303.396 241.894C303.377 244.019 302.936 246.118 302.098 248.07C301.259 250.022 300.04 251.788 298.512 253.264C289.603 262.182 279.02 269.252 267.372 274.07C255.723 278.887 243.237 281.356 230.632 281.336Z"
              fill="currentColor"
            />
            <path
              d="M287.192 257.944C284.028 257.943 280.935 257.004 278.305 255.246C275.674 253.488 273.624 250.99 272.413 248.066C271.203 245.143 270.886 241.927 271.503 238.823C272.12 235.72 273.643 232.869 275.88 230.632L365.256 141.256C366.732 139.728 368.498 138.509 370.45 137.67C372.402 136.832 374.501 136.39 376.626 136.372C378.75 136.353 380.857 136.758 382.823 137.563C384.79 138.367 386.576 139.555 388.078 141.058C389.581 142.56 390.769 144.346 391.573 146.313C392.378 148.279 392.783 150.386 392.764 152.51C392.746 154.635 392.304 156.734 391.466 158.686C390.627 160.638 389.408 162.404 387.88 163.88L298.504 253.256C297.021 254.745 295.258 255.926 293.317 256.731C291.375 257.536 289.294 257.948 287.192 257.944ZM152.568 392.568C149.404 392.567 146.311 391.628 143.681 389.87C141.05 388.112 139 385.614 137.789 382.69C136.579 379.767 136.262 376.551 136.879 373.447C137.496 370.344 139.019 367.493 141.256 365.256L191.216 315.296C192.692 313.768 194.458 312.549 196.41 311.71C198.362 310.872 200.461 310.43 202.586 310.412C204.71 310.393 206.817 310.798 208.783 311.603C210.75 312.407 212.536 313.595 214.038 315.098C215.541 316.6 216.729 318.386 217.533 320.353C218.338 322.319 218.743 324.426 218.724 326.55C218.706 328.675 218.264 330.774 217.426 332.726C216.587 334.678 215.368 336.444 213.84 337.92L163.88 387.88C162.397 389.369 160.634 390.55 158.693 391.355C156.751 392.16 154.67 392.572 152.568 392.568ZM39.4321 279.432C36.2681 279.431 33.1754 278.492 30.5448 276.734C27.9142 274.976 25.864 272.478 24.6533 269.554C23.4426 266.631 23.1257 263.415 23.7428 260.311C24.3599 257.208 25.8832 254.357 28.1201 252.12L117.496 162.752C118.972 161.224 120.738 160.005 122.69 159.166C124.642 158.328 126.741 157.886 128.866 157.868C130.99 157.849 133.097 158.254 135.063 159.059C137.03 159.863 138.816 161.051 140.318 162.554C141.821 164.056 143.009 165.842 143.813 167.809C144.618 169.775 145.023 171.882 145.004 174.006C144.986 176.131 144.544 178.23 143.706 180.182C142.867 182.134 141.648 183.9 140.12 185.376L50.7441 274.744C47.6161 277.864 43.5201 279.432 39.4321 279.432ZM213.472 105.4C210.308 105.399 207.215 104.46 204.585 102.702C201.954 100.944 199.904 98.4455 198.693 95.5223C197.483 92.5991 197.166 89.3826 197.783 86.2794C198.4 83.1761 199.923 80.3255 202.16 78.0879L252.12 28.1199C255.121 25.1187 259.192 23.4326 263.436 23.4326C267.68 23.4326 271.751 25.1187 274.752 28.1199C277.753 31.121 279.439 35.1915 279.439 39.4359C279.439 43.6802 277.753 47.7507 274.752 50.7519L224.792 100.72C221.787 103.717 217.716 105.401 213.472 105.4Z"
              fill="currentColor"
            />
            <path
              d="M96 415.48C71.256 415.48 46.512 406.28 28.12 387.88C-8.67998 351.08 -8.67998 288.912 28.12 252.112C29.596 250.584 31.3615 249.365 33.3135 248.526C35.2656 247.688 37.3651 247.246 39.4896 247.228C41.6141 247.21 43.7209 247.614 45.6873 248.419C47.6536 249.223 49.4401 250.411 50.9423 251.914C52.4446 253.416 53.6327 255.202 54.4372 257.169C55.2417 259.135 55.6465 261.242 55.628 263.366C55.6096 265.491 55.1682 267.59 54.3296 269.543C53.4911 271.495 52.2722 273.26 50.744 274.736C26.216 299.264 26.216 340.72 50.744 365.248C75.272 389.776 116.728 389.776 141.256 365.248C142.732 363.72 144.497 362.501 146.45 361.662C148.402 360.824 150.501 360.382 152.626 360.364C154.75 360.346 156.857 360.75 158.823 361.555C160.79 362.359 162.576 363.547 164.078 365.05C165.581 366.552 166.769 368.338 167.573 370.305C168.378 372.271 168.782 374.378 168.764 376.502C168.746 378.627 168.304 380.726 167.466 382.678C166.627 384.631 165.408 386.396 163.88 387.872C145.488 406.28 120.744 415.48 96 415.48ZM376.568 168.568C373.404 168.567 370.311 167.629 367.681 165.87C365.05 164.112 363 161.614 361.789 158.69C360.578 155.767 360.262 152.551 360.879 149.448C361.496 146.344 363.019 143.494 365.256 141.256C389.784 116.728 389.784 75.272 365.256 50.744C340.728 26.216 299.272 26.216 274.744 50.744C273.268 52.2722 271.503 53.4911 269.551 54.3296C267.598 55.1682 265.499 55.6096 263.374 55.628C261.25 55.6465 259.143 55.2417 257.177 54.4372C255.21 53.6327 253.424 52.4446 251.922 50.9423C250.419 49.4401 249.231 47.6536 248.427 45.6873C247.622 43.7209 247.218 41.6141 247.236 39.4896C247.254 37.3651 247.696 35.2656 248.534 33.3135C249.373 31.3615 250.592 29.596 252.12 28.12C288.92 -8.67998 351.088 -8.67998 387.888 28.12C424.688 64.92 424.688 127.088 387.888 163.888C384.76 167.008 380.664 168.568 376.568 168.568Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className={itemIcon2Classes}>
          <svg
            width={17}
            height={17}
            viewBox="0 0 416 416"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M241.944 190.064C239.842 190.068 237.761 189.655 235.819 188.851C233.878 188.046 232.115 186.865 230.632 185.376C205.68 160.424 165.08 160.416 140.12 185.376C138.644 186.904 136.878 188.123 134.926 188.961C132.974 189.8 130.875 190.241 128.75 190.26C126.626 190.278 124.519 189.873 122.553 189.069C120.586 188.264 118.8 187.076 117.298 185.574C115.795 184.072 114.607 182.285 113.803 180.319C112.998 178.353 112.593 176.246 112.612 174.121C112.63 171.997 113.072 169.897 113.91 167.945C114.749 165.993 115.968 164.228 117.496 162.752C154.928 125.312 215.832 125.32 253.256 162.752C255.493 164.989 257.016 167.84 257.633 170.943C258.25 174.047 257.933 177.263 256.723 180.186C255.512 183.109 253.462 185.608 250.831 187.366C248.201 189.124 245.108 190.063 241.944 190.064ZM230.632 281.336C206.048 281.336 181.464 271.976 162.752 253.264C161.224 251.788 160.005 250.022 159.166 248.07C158.328 246.118 157.886 244.019 157.868 241.894C157.849 239.77 158.254 237.663 159.059 235.697C159.863 233.73 161.051 231.944 162.554 230.441C164.056 228.939 165.842 227.751 167.809 226.947C169.775 226.142 171.882 225.737 174.006 225.756C176.131 225.774 178.23 226.216 180.182 227.054C182.134 227.893 183.9 229.112 185.376 230.64C210.328 255.592 250.928 255.6 275.888 230.64C277.364 229.112 279.129 227.893 281.081 227.054C283.034 226.216 285.133 225.774 287.258 225.756C289.382 225.737 291.489 226.142 293.455 226.947C295.422 227.751 297.208 228.939 298.71 230.441C300.213 231.944 301.401 233.73 302.205 235.697C303.01 237.663 303.414 239.77 303.396 241.894C303.377 244.019 302.936 246.118 302.098 248.07C301.259 250.022 300.04 251.788 298.512 253.264C289.603 262.182 279.02 269.252 267.372 274.07C255.723 278.887 243.237 281.356 230.632 281.336Z"
              fill="currentColor"
            />
            <path
              d="M287.192 257.944C284.028 257.943 280.935 257.004 278.305 255.246C275.674 253.488 273.624 250.99 272.413 248.066C271.203 245.143 270.886 241.927 271.503 238.823C272.12 235.72 273.643 232.869 275.88 230.632L365.256 141.256C366.732 139.728 368.498 138.509 370.45 137.67C372.402 136.832 374.501 136.39 376.626 136.372C378.75 136.353 380.857 136.758 382.823 137.563C384.79 138.367 386.576 139.555 388.078 141.058C389.581 142.56 390.769 144.346 391.573 146.313C392.378 148.279 392.783 150.386 392.764 152.51C392.746 154.635 392.304 156.734 391.466 158.686C390.627 160.638 389.408 162.404 387.88 163.88L298.504 253.256C297.021 254.745 295.258 255.926 293.317 256.731C291.375 257.536 289.294 257.948 287.192 257.944ZM152.568 392.568C149.404 392.567 146.311 391.628 143.681 389.87C141.05 388.112 139 385.614 137.789 382.69C136.579 379.767 136.262 376.551 136.879 373.447C137.496 370.344 139.019 367.493 141.256 365.256L191.216 315.296C192.692 313.768 194.458 312.549 196.41 311.71C198.362 310.872 200.461 310.43 202.586 310.412C204.71 310.393 206.817 310.798 208.783 311.603C210.75 312.407 212.536 313.595 214.038 315.098C215.541 316.6 216.729 318.386 217.533 320.353C218.338 322.319 218.743 324.426 218.724 326.55C218.706 328.675 218.264 330.774 217.426 332.726C216.587 334.678 215.368 336.444 213.84 337.92L163.88 387.88C162.397 389.369 160.634 390.55 158.693 391.355C156.751 392.16 154.67 392.572 152.568 392.568ZM39.4321 279.432C36.2681 279.431 33.1754 278.492 30.5448 276.734C27.9142 274.976 25.864 272.478 24.6533 269.554C23.4426 266.631 23.1257 263.415 23.7428 260.311C24.3599 257.208 25.8832 254.357 28.1201 252.12L117.496 162.752C118.972 161.224 120.738 160.005 122.69 159.166C124.642 158.328 126.741 157.886 128.866 157.868C130.99 157.849 133.097 158.254 135.063 159.059C137.03 159.863 138.816 161.051 140.318 162.554C141.821 164.056 143.009 165.842 143.813 167.809C144.618 169.775 145.023 171.882 145.004 174.006C144.986 176.131 144.544 178.23 143.706 180.182C142.867 182.134 141.648 183.9 140.12 185.376L50.7441 274.744C47.6161 277.864 43.5201 279.432 39.4321 279.432ZM213.472 105.4C210.308 105.399 207.215 104.46 204.585 102.702C201.954 100.944 199.904 98.4455 198.693 95.5223C197.483 92.5991 197.166 89.3826 197.783 86.2794C198.4 83.1761 199.923 80.3255 202.16 78.0879L252.12 28.1199C255.121 25.1187 259.192 23.4326 263.436 23.4326C267.68 23.4326 271.751 25.1187 274.752 28.1199C277.753 31.121 279.439 35.1915 279.439 39.4359C279.439 43.6802 277.753 47.7507 274.752 50.7519L224.792 100.72C221.787 103.717 217.716 105.401 213.472 105.4Z"
              fill="currentColor"
            />
            <path
              d="M96 415.48C71.256 415.48 46.512 406.28 28.12 387.88C-8.67998 351.08 -8.67998 288.912 28.12 252.112C29.596 250.584 31.3615 249.365 33.3135 248.526C35.2656 247.688 37.3651 247.246 39.4896 247.228C41.6141 247.21 43.7209 247.614 45.6873 248.419C47.6536 249.223 49.4401 250.411 50.9423 251.914C52.4446 253.416 53.6327 255.202 54.4372 257.169C55.2417 259.135 55.6465 261.242 55.628 263.366C55.6096 265.491 55.1682 267.59 54.3296 269.543C53.4911 271.495 52.2722 273.26 50.744 274.736C26.216 299.264 26.216 340.72 50.744 365.248C75.272 389.776 116.728 389.776 141.256 365.248C142.732 363.72 144.497 362.501 146.45 361.662C148.402 360.824 150.501 360.382 152.626 360.364C154.75 360.346 156.857 360.75 158.823 361.555C160.79 362.359 162.576 363.547 164.078 365.05C165.581 366.552 166.769 368.338 167.573 370.305C168.378 372.271 168.782 374.378 168.764 376.502C168.746 378.627 168.304 380.726 167.466 382.678C166.627 384.631 165.408 386.396 163.88 387.872C145.488 406.28 120.744 415.48 96 415.48ZM376.568 168.568C373.404 168.567 370.311 167.629 367.681 165.87C365.05 164.112 363 161.614 361.789 158.69C360.578 155.767 360.262 152.551 360.879 149.448C361.496 146.344 363.019 143.494 365.256 141.256C389.784 116.728 389.784 75.272 365.256 50.744C340.728 26.216 299.272 26.216 274.744 50.744C273.268 52.2722 271.503 53.4911 269.551 54.3296C267.598 55.1682 265.499 55.6096 263.374 55.628C261.25 55.6465 259.143 55.2417 257.177 54.4372C255.21 53.6327 253.424 52.4446 251.922 50.9423C250.419 49.4401 249.231 47.6536 248.427 45.6873C247.622 43.7209 247.218 41.6141 247.236 39.4896C247.254 37.3651 247.696 35.2656 248.534 33.3135C249.373 31.3615 250.592 29.596 252.12 28.12C288.92 -8.67998 351.088 -8.67998 387.888 28.12C424.688 64.92 424.688 127.088 387.888 163.888C384.76 167.008 380.664 168.568 376.568 168.568Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="absolute left-[0] top-[0] z-10 h-full w-full scale-0 rounded-full bg-accent transition-all duration-300 group-hover:scale-100"></div>
      </div>
    </div>
  );
};

export default Share2;

// https://twitter.com/intent/tweet?text=%22ECMAScript%202023%3A%20Fresh%20Goodies%20for%20JavaScript%20Developers%22%20by%20Navdeep%20Mishra%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Fnavdeepm20%2Fdive-into-ecmascript-2023-fresh-goodies-for-javascript-developers-1dda
