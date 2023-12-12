import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/sanity/queries";

interface Props {
  item: Article;
}

const CardArticle10 = ({ item }: Props) => {
  return (
    <div
      title={""}
      className="group grid grid-cols-12 border-x border-b border-black/30 p-3 pb-0 first:border-t dark:border-white/30"
    >
      <div className="col-span-2 h-[5rem] overflow-hidden">
        <Link href={"/article"}>
          <Image
            className="h-full w-full bg-center object-cover transition-all duration-300 group-hover:scale-125"
            src={"/images/card.jpeg"}
            width={100}
            height={80}
            alt={""}
          />
        </Link>
      </div>

      <div className="col-span-10 pl-3">
        <Link href={`/article/`}>
          <h2 className="text-[1.15rem] font-semibold text-light-primary transition-colors hover:text-accent dark:text-dark-primary xs:text-[.95rem]">
            Advancements in Artificial Intelligence Ethical Considerations
          </h2>
        </Link>

        <p className="pb-3 font-medium capitalize text-light-primary dark:text-white/50">
          <Link href={`/author/`}>
            <span className="border-r-[1.5px] border-light-primary pr-[.65rem] text-xs tracking-wide underline transition-colors duration-300 hover:text-accent dark:border-white/50">
              Ravi Gajurel
            </span>
          </Link>

          <span className="px-[.65rem] text-xs tracking-wide">
            January 03, 2024
          </span>
        </p>

        <div className="h-[2.5rem] w-full overflow-hidden">
          <div className="relative h-full w-full text-[.7rem] font-medium uppercase tracking-wide text-light-secondary transition-all group-hover:text-light-primary dark:border-dark-contrast-200/60 dark:text-dark-secondary dark:group-hover:text-dark-primary">
            <div className="flex h-[100%] items-center justify-between transition-all group-hover:translate-y-[-100%]">
              <div className="flex gap-3">
                <span>2 min read</span>
                <span>334 views</span>
              </div>

              <div>shares 934</div>
            </div>

            <div className="absolute left-[0] top-[0] flex h-[100%] w-[100%] translate-y-[100%] items-center justify-between transition-all group-hover:translate-y-[0%]">
              <span>Read more</span>

              <ul className="flex items-center gap-2 group-hover:text-light-primary dark:group-hover:text-dark-primary">
                <li className="flex items-center gap-[.25rem]">
                  <svg
                    width={12}
                    height={12}
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

                  <span>23</span>
                </li>

                <li className="flex items-center gap-[.25rem]">
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 502 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M298.662 216.797L485.167 0H440.971L279.029 188.242L149.686 0H0.504639L196.096 284.655L0.504639 512H44.7029L215.718 313.21L352.314 512H501.495L298.651 216.797H298.662ZM238.127 287.163L218.309 258.818L60.6281 33.2716H128.514L255.764 215.295L275.582 243.64L440.992 480.241H373.106L238.127 287.174V287.163Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span>23</span>
                </li>

                <li className="flex items-center gap-[.25rem]">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 266 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M172.651 512V278.47H251.006L262.761 187.432H172.651V129.318C172.651 102.968 179.938 85.0116 217.766 85.0116L265.933 84.9918V3.56429C257.603 2.4818 229.01 0 195.73 0C126.236 0 78.6594 42.4183 78.6594 120.301V187.432H0.0668945V278.47H78.6594V512H172.651Z"
                      fill={"currentColor"}
                    />
                  </svg>

                  <span>23</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle10;
