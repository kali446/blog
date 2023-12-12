import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Author } from "@/sanity/queries";
import { generateImageUrl } from "@/utils";

interface Props {
  data?: Author;
}

const Author = ({ data }: Props) => {
  const authorImageUrl = generateImageUrl({
    thumbnail: data?.avatar,
    size: {
      height: 250,
      width: 250,
    },
  });

  return (
    <div className="mb-[5rem] flex flex-col items-center gap-4 border-b border-light-contrast-300 px-[4rem] pb-5 dark:border-dark-contrast-300/50 sm:px-[2rem] xs:px-0">
      <div className="h-[6rem] w-[6rem] overflow-hidden rounded-full">
        <Image
          className="h-[100%] w-[100%] bg-cover bg-center object-cover"
          src={authorImageUrl}
          width={250}
          height={250}
          alt={data?.name || ""}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <ul className="flex cursor-pointer items-center gap-2">
          {data?.sociallinks.map((item, i) => {
            if (item.name.toLowerCase() === "facebook") {
              return (
                <li key={i}>
                  <Link href={item.url} target="_blank">
                    <Image
                      width={40}
                      height={40}
                      className="h-[auto] w-[1rem] transition-all duration-150 hover:translate-y-[-3px]"
                      src="/icons/facebook.svg"
                      alt=""
                    />
                  </Link>
                </li>
              );
            }

            if (item.name.toLowerCase() === "website") {
              return (
                <li key={i}>
                  <Link href={item.url} target="_blank">
                    <div className="text-black transition-all  duration-150 hover:translate-y-[-3px] dark:text-white">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 512 512"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M203.698 142.283C206.974 133.548 210.62 125.816 214.576 119.133C186.469 127.656 161.998 144.611 144.12 167.045C157.684 172.887 174.34 177.534 192.955 180.749C195.759 166.807 199.36 153.85 203.698 142.283ZM189.095 204.363C166.725 200.487 146.693 194.678 130.627 187.275C120.99 204.768 115.153 224.097 113.499 244H186.045C186.426 230.39 187.458 217.097 189.095 204.363ZM295.21 183.969C292.713 171.904 289.58 160.702 285.833 150.709C277.115 127.452 265.688 113.005 256.014 113.005C246.328 113.005 234.892 127.453 226.17 150.71C222.423 160.702 219.289 171.903 216.79 183.967C229.377 185.227 242.542 185.892 256.014 185.892C269.476 185.892 282.633 185.228 295.211 183.969H295.21ZM212.867 304.376C226.757 302.91 241.245 302.136 256.014 302.136C270.774 302.136 285.252 302.909 299.134 304.374C300.62 292.72 301.562 280.524 301.931 268H210.07C210.439 280.524 211.38 292.721 212.867 304.376ZM186.045 268H113.499C115.154 287.911 120.995 307.249 130.639 324.747C146.703 317.347 166.732 311.539 189.098 307.665C187.459 294.922 186.426 281.62 186.045 268ZM319.046 180.751C337.663 177.535 354.319 172.887 367.886 167.043C350.007 144.606 325.536 127.65 297.429 119.129C301.385 125.812 305.03 133.546 308.306 142.284C312.643 153.852 316.243 166.809 319.046 180.751ZM299.135 207.654C285.254 209.119 270.775 209.892 256.015 209.892C241.244 209.892 226.755 209.119 212.865 207.652C211.379 219.299 210.438 231.486 210.069 244H301.931C301.562 231.487 300.62 219.3 299.135 207.654ZM216.794 328.06C219.292 340.119 222.424 351.314 226.17 361.3C234.89 384.55 246.326 398.994 256.014 398.994C265.69 398.994 277.116 384.551 285.834 361.301C289.578 351.314 292.71 340.118 295.207 328.059C282.63 326.801 269.475 326.137 256.014 326.137C242.544 326.137 229.379 326.801 216.794 328.061V328.06Z"
                          fill="currentColor"
                        />
                        <path
                          d="M411.462 0H100.566C45.1222 0 0.0141602 45.107 0.0141602 100.552V411.448C0.0141602 466.893 45.1222 512 100.566 512H411.462C466.892 512 511.986 466.893 511.986 411.448V100.552C511.986 45.107 466.89 0 411.462 0ZM256.014 422.994C163.918 422.994 88.9912 348.081 88.9912 256C88.9912 163.919 163.918 89.005 256.014 89.005C348.095 89.005 423.009 163.919 423.009 256C423.009 348.081 348.095 422.994 256.014 422.994Z"
                          fill="currentColor"
                        />
                        <path
                          d="M325.955 244H398.501C396.847 224.097 391.012 204.767 381.376 187.274C365.309 194.679 345.276 200.489 322.906 204.364C324.542 217.099 325.574 230.392 325.956 244H325.955ZM308.306 369.727C305.031 378.459 301.388 386.189 297.434 392.869C325.53 384.351 349.992 367.403 367.868 344.978C354.304 339.137 337.653 334.491 319.043 331.277C316.24 345.214 312.641 358.164 308.306 369.727ZM192.959 331.278C174.349 334.493 157.699 339.137 144.137 344.976C162.013 367.398 186.475 384.344 214.571 392.865C210.617 386.185 206.973 378.458 203.698 369.728C199.362 358.166 195.762 345.216 192.958 331.278H192.959ZM322.903 307.664C345.269 311.538 365.298 317.346 381.364 324.748C391.007 307.249 396.847 287.911 398.501 268H325.955C325.574 281.619 324.541 294.921 322.903 307.664Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              );
            }

            if (item.name.toLowerCase() === "instagram") {
              return (
                <li key={i}>
                  <Link href={item.url} target="_blank">
                    <Image
                      height={40}
                      width={40}
                      className="h-[auto] w-[1rem] transition-all duration-150 hover:translate-y-[-3px]"
                      src="/icons/instagram.svg"
                      alt=""
                    />
                  </Link>
                </li>
              );
            }

            if (item.name.toLowerCase() === "x" || "twitter") {
              return (
                <li key={i}>
                  <Link href={item.url} target="_blank">
                    <div className="text-black transition-all  duration-150 hover:translate-y-[-3px] dark:text-white">
                      <svg
                        width={16}
                        height={16}
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
                  </Link>
                </li>
              );
            }

            if (item.name.toLowerCase() === "pinterest") {
              return (
                <li key={i}>
                  <Link href={item.url} target="_blank">
                    <Image
                      height={40}
                      width={40}
                      className="h-[auto] w-[1rem] transition-all duration-150 hover:translate-y-[-3px]"
                      src="/icons/pinterest.svg"
                      alt=""
                    />
                  </Link>
                </li>
              );
            }

            return null;
          })}
        </ul>

        <h1 className="text-xl font-bold capitalize text-light-primary dark:text-dark-primary">
          {data?.name}
        </h1>
      </div>

      <p className="text-center text-[.925rem] font-light leading-relaxed text-light-primary dark:text-dark-secondary">
        {data?.bio}
      </p>
    </div>
  );
};

export default Author;
