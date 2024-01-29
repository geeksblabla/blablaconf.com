"use client";

import { useLayoutEffect } from "react";

export const VideoAnimation = () => {
  useLayoutEffect(() => {
    const video = document.getElementById(
      "video-animation"
    ) as HTMLVideoElement;
    if (video) {
      video.play();
    }
  }, []);
  return (
    <video
      id="video-animation"
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      className="md:mx-auto -ml-16 pointer-events-none max-w-[1000px] min-w-[600px] w-full self-end"
    >
      <source
        src="/images/people-walking-2.mov"
        type='video/mp4; codecs="hvc1"'
      />
      <source src="/images/people-walking.webm" type="video/webm" />
    </video>
  );
};
