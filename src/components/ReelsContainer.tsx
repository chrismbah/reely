"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import {
  CommentIcon,
  ShareIcon,
  SaveIcon,
  OptionsIcons,
} from "@/components/icons";
import ShareModal from "./ShareModal";
import { ReelData, ReelItemProps } from "@/types";
import { reelsData } from "@/data/reels";
import { AiFillProduct } from "react-icons/ai";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { productVariants } from "@/variants";

const ReelItem = ({ reel, isMuted, onMuteToggle }: ReelItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [hasLikedVideo, setHasLikedVideo] = useState(false);
  const [likeCount, setLikeCount] = useState(reel.likes);
  const [showShareModal, setShowShareModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update video muted state when isMuted prop changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Intersection Observer for video playback
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
            setIsPlaying(true);
            setShowPlayButton(false);
          } else {
            videoRef.current?.pause();
            if (videoRef.current) videoRef.current.currentTime = 0;
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Video play/pause controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowPlayButton(true);
      } else {
        void videoRef.current.play();
        setShowPlayButton(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const toggleLikedVideo = () => {
    if (hasLikedVideo) {
      setHasLikedVideo(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setHasLikedVideo(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <div className="h-[88vh] md:h-[100vh] flex items-center justify-center snap-start">
      <div
        ref={containerRef}
        className="relative h-full w-[411px] gap-3 flex items-end justify-start p-4 rounded overflow-hidden"
      >
        <video
          ref={videoRef}
          className="relative w-[351px] h-full object-cover rounded cursor-pointer"
          loop
          muted={isMuted}
          playsInline
          onClick={handleVideoClick}
        >
          <source src={reel.videoUrl} type="video/mp4" />
        </video>

        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-opacity duration-300 ${
            showPlayButton || !isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            {isPlaying ? (
              <BsPauseFill size={40} className="text-white" />
            ) : (
              <BsFillPlayFill size={40} className="text-white" />
            )}
          </button>
        </div>

        <button
          onClick={() => onMuteToggle(!isMuted)}
          className="absolute top-6 right-14 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors z-20"
        >
          {isMuted ? (
            <BsFillVolumeMuteFill size={16} className="text-white" />
          ) : (
            <BsFillVolumeUpFill size={16} className="text-white" />
          )}
        </button>

        <div className="user-info w-[76%] absolute bottom-8 left-8 z-10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={reel.user.avatar}
              alt="user"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <p className="text-sm">{reel.user.name}</p>
            &#183;
            <button className="text-sm py-1 px-[6px] font-semibold rounded border border-[#f5f5f5]/10">
              Follow
            </button>
          </div>
          <div>{reel.description}</div>
          <div className="relative flex gap-2 items-center">
            <div className="bg-white/10 backdrop-blur-md py-[6px] px-3 overflow-hidden rounded-[20px] flex items-center gap-1 text-sm">
              <IoMusicalNotesSharp size={18} className="text-white" />{" "}
              {reel.user.name} &#183; Original audio
            </div>
            {/* Tags Modal */}
            <AnimatePresence>
              {showTagModal && (
                <motion.div
                  variants={productVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute bottom-full mb-2 w-full bg-[#0a0a0a]/50  backdrop-blur-md  rounded-lg overflow-hidden"
                >
                  {reel.productTags.map((tag) => (
                    <div
                      key={tag.id}
                      className="p-3 hover:bg-white/20 transition-colors flex items-center gap-3 cursor-pointer"
                      onClick={() => window.open(tag.product.url, "_blank")}
                    >
                      <Image
                        src={tag.product.image}
                        alt={tag.product.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-semibold">
                          {tag.product.name}
                        </h4>
                        <p className="text-xs opacity-80">
                          {tag.product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {/* Tagged Users Button */}
            {reel.productTags.length > 0 && (
              <div className="relative z-10">
                <button
                  onClick={() => setShowTagModal(!showTagModal)}
                  className=" bg-white/10 backdrop-blur-md py-[6px] px-3 rounded-[20px] flex items-center text-sm gap-1"
                >
                  <AiFillProduct size={16} />
                  {reel.productTags.length}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-[60px] flex flex-col gap-7 justify-end items-center">
          <button
            onClick={() => toggleLikedVideo()}
            className="hover:text-gray-300 transition-colors"
          >
            {hasLikedVideo ? (
              <IoMdHeart className="w-7 h-7 text-red-500" />
            ) : (
              <IoMdHeartEmpty className="w-7 h-7 text-white hover:text-red-500" />
            )}
            <span className="text-xs block mt-1">{likeCount}</span>
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <CommentIcon />
            <span className="text-xs block mt-1">{reel.comments}</span>
          </button>
          <button
            onClick={() => setShowShareModal(true)}
            className="hover:text-gray-300 transition-colors"
          >
            <ShareIcon />
          </button>

          <button className="hover:text-gray-300 transition-colors">
            <SaveIcon />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <OptionsIcons />
          </button>
          <div className="user w-6 h-6 overflow-hidden rounded">
            <Image
              src={reel.user.avatar}
              alt="user"
              width={32}
              height={32}
              className="w-full h-full rounded"
            />
          </div>
        </div>
        {showShareModal && (
          <ShareModal
            shareUrl={`${window.location.origin}/reels/${reel.id}`}
            onClose={() => setShowShareModal(false)}
          />
        )}
      </div>
    </div>
  );
};

const ReelsContainer = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="flex-1 h-screen hide-scrollbar overflow-y-scroll snap-y snap-mandatory">
      {reelsData.map((reel) => (
        <ReelItem
          key={reel.id}
          reel={reel}
          isMuted={isMuted}
          onMuteToggle={setIsMuted}
        />
      ))}
    </div>
  );
};

export default ReelsContainer;
