"use client";
import { useState } from "react";

interface Props {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: Props) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 cursor-pointer"
      style={{ paddingBottom: "56.25%" }}
      onClick={() => setLoaded(true)}
    >
      {loaded ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Karartma */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Play butonu */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
