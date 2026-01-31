"use client";

import Image from "next/image";
import { useState } from "react";

interface SpeakerAvatarProps {
  fullName: string;
  profilePicture: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-14 h-14 min-w-14 min-h-14 text-lg",
  md: "w-16 h-16 min-w-16 min-h-16 text-xl",
  lg: "w-20 h-20 min-w-20 min-h-20 text-2xl",
};

const imageSizes = {
  sm: 56,
  md: 64,
  lg: 80,
};

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const SpeakerAvatar = ({
  fullName,
  profilePicture,
  size = "md",
  className = "",
}: SpeakerAvatarProps) => {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(fullName);

  if (imageError || !profilePicture) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full border-[3px] border-black bg-secondary flex items-center justify-center font-bold text-white ${className}`}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      alt={`${fullName} profile picture`}
      src={profilePicture}
      className={`${sizeClasses[size]} rounded-full border-[3px] border-black object-cover aspect-square ${className}`}
      height={imageSizes[size]}
      width={imageSizes[size]}
      onError={() => setImageError(true)}
    />
  );
};
