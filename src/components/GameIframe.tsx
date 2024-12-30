"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Star, Maximize2 } from 'lucide-react';
import { Game } from '@/src/lib/dataType';

const GameIframe: React.FC<Game> = ({ src, title, logoSrc }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  const handleLoad = () => {
    setIsLoading(false);
  };

    const handleFullscreen = () => {
    if (iframeRef.current) {
      iframeRef.current.requestFullscreen();
    }
    };
  
  const handleError = () => {
    setError('加载游戏时出错。请稍后再试。');
    setIsLoading(false);
  };
  return (
    <div className="container mx-auto px-4 pt-0">
      <div className="flex flex-col w-full max-w-[1600px] aspect-video mx-auto lg:w-[90%]">
        <div className="flex-grow relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <p className="text-base font-semibold">Loading...</p>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-100">
              <p className="text-base font-semibold text-red-600">{error}</p>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={src}
            className="w-full h-full border-0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>
        <div className="flex items-center justify-between bg-black bg-opacity-50 text-white p-2">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 cursor-pointer ${
                  star <= (hover || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleFullscreen}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}
export default GameIframe;
