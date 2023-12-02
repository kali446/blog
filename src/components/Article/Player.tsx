"use client";
import React, { useState } from "react";
import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";

interface Props {
  videoId: string;
  poster?: string;
}

const Player = ({ videoId, poster }: Props) => {
  const [playVideo, setPlayVideo] = useState(false);

  const options: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="group relative flex aspect-video h-auto w-full cursor-pointer items-center justify-center overflow-hidden rounded-md">
      {poster ? (
        <>
          {playVideo ? (
            <YouTube videoId={videoId} opts={options} />
          ) : (
            <div onClick={() => setPlayVideo(true)} className="h-full w-full">
              <Image
                className="bg-center object-cover"
                src={poster}
                width={500}
                height={500}
                alt="video player"
              />

              <div className="absolute left-[0] top-[0] z-10 h-full w-full bg-light-overlay/40" />

              <div className="absolute left-[50%] top-[50%] z-20 flex h-[4rem] w-[4rem] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-light-contrast-300/40 text-white backdrop-blur-sm transition-all duration-200">
                <svg
                  className="transition-all duration-200 group-hover:scale-[1.35]"
                  width={14}
                  height={"auto"}
                  viewBox="0 0 462 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.9141 11.2892C37.7544 -15.1887 0.331055 6.50233 0.331055 59.6986V452.264C0.331055 505.513 37.7544 527.176 83.9141 500.723L427.036 303.945C473.211 277.458 473.211 234.545 427.036 208.064L83.9141 11.2892Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <YouTube videoId={videoId} opts={options} />
        </>
      )}
    </div>
  );
};

export default Player;
